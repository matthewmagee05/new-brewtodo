import { Injectable, Inject } from '@nestjs/common'
import { constants } from '../../common/constants'
import { Repository } from 'typeorm'
import { Breweries } from './breweries.entity'
import {
    paginate,
    IPaginationOptions,
    Pagination,
} from 'nestjs-typeorm-paginate'

@Injectable()
export class BreweriesService {
    constructor(
        @Inject(constants.breweryRepository)
        private breweryRepository: Repository<Breweries>
    ) {}

    async paginate(
        options: IPaginationOptions
    ): Promise<Pagination<Breweries>> {
        const queryBuilder = this.breweryRepository.createQueryBuilder(
            'breweries'
        )
        queryBuilder
            .select()

            .leftJoinAndSelect(
                'breweries.review',
                'review',
                'review.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.beer',
                'beer',
                'beer.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.state',
                'state',
                'state.id =  breweries.state'
            )
            .leftJoinAndSelect('review.user', 'user', 'user.id =  review.user')
            .addSelect(
                '(SELECT ROUND( AVG(review.rating),1 ) FROM review WHERE review.breweryId = breweries.id)',
                'breweries_avgReview'
            )

        return await paginate<Breweries>(queryBuilder, options)
    }

    async findByFilters(
        options: IPaginationOptions,
        lat: number = 29.6211025,
        lng = -95.2632201,
        distance: number = 10000,
        beerType: number,
        orderByReview = 'DESC'
    ): Promise<Pagination<Breweries>> {
        console.log(beerType)
        const beerTypeSearch =
            beerType === undefined ? '' : `AND beer.beerType = ${beerType}`
        let queryBuilder = this.breweryRepository.createQueryBuilder(
            'breweries'
        )
        queryBuilder
            .select()
            .addSelect(
                `(3959 * acos(cos(radians(${lat})) * cos(radians(lat)) * cos(radians(lng) - radians(${lng})) + sin(radians(${lat})) * sin(radians(lat ))))`,
                'breweries_distance'
            )
            .leftJoinAndSelect(
                'breweries.review',
                'review',
                'review.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.beer',
                'beer',
                'beer.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.state',
                'state',
                'state.id =  breweries.state'
            )
            .leftJoinAndSelect('review.user', 'user', 'user.id =  review.user')
            .addSelect(
                '(SELECT ROUND( AVG(review.rating),1 ) FROM review WHERE review.breweryId = breweries.id)',
                'breweries_avgReview'
            )
            .where(
                `(3959 * acos(cos(radians(${lat})) * cos(radians(lat)) * cos(radians(lng) - radians(${lng})) + sin(radians(${lat})) * sin(radians(lat )))) < ${distance} ${beerTypeSearch}`
            )

        queryBuilder =
            orderByReview === 'DESC'
                ? queryBuilder.orderBy('breweries_avgReview', 'DESC')
                : queryBuilder.orderBy('breweries_avgReview', 'ASC')

        return await paginate<Breweries>(queryBuilder, options)
    }

    async findAll(): Promise<Breweries[]> {
        return await this.breweryRepository
            .createQueryBuilder('breweries')
            .select()

            .leftJoinAndSelect(
                'breweries.review',
                'review',
                'review.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.beer',
                'beer',
                'beer.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.state',
                'state',
                'state.id =  breweries.state'
            )
            .leftJoinAndSelect('review.user', 'user', 'user.id =  review.user')
            .addSelect(
                '(SELECT ROUND( AVG(review.rating),1 ) FROM review WHERE review.breweryId = breweries.id)',
                'breweries_avgReview'
            )
            .getMany()
    }

    async findFeaturedBreweries(): Promise<Partial<Breweries[]>> {
        return await this.breweryRepository
            .createQueryBuilder('breweries')
            .select()

            .leftJoinAndSelect(
                'breweries.review',
                'review',
                'review.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.beer',
                'beer',
                'beer.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.state',
                'state',
                'state.id =  breweries.state'
            )
            .leftJoinAndSelect('review.user', 'user', 'user.id =  review.user')
            .addSelect(
                '(SELECT ROUND( AVG(review.rating),1 ) FROM review WHERE review.breweryId = breweries.id)',
                'breweries_avgReview'
            )
            .where('breweries.isFeatured = true')
            .getMany()
    }

    async getBreweryById(breweryId: number): Promise<Breweries> {
        return await this.breweryRepository
            .createQueryBuilder('breweries')
            .select()

            .leftJoinAndSelect(
                'breweries.review',
                'review',
                'review.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.beer',
                'beer',
                'beer.breweryId =  breweries.id'
            )
            .leftJoinAndSelect(
                'breweries.state',
                'state',
                'state.id =  breweries.state'
            )
            .leftJoinAndSelect('review.user', 'user', 'user.id =  review.user')
            .addSelect(
                '(SELECT ROUND( AVG(review.rating),1 ) FROM review WHERE review.breweryId = breweries.id)',
                'breweries_avgReview'
            )
            .where(`breweries.id = ${breweryId}`)
            .getOne()
    }

    async createBrewery(brewery: Breweries) {
        this.breweryRepository.save(brewery)
    }

    async deleteBrewery(brewery: Breweries) {
        this.breweryRepository.delete(brewery)
    }
}
