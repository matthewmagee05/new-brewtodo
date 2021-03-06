import { Injectable, Inject } from '@nestjs/common'
import { constants } from '../../common/constants'
import { Repository, SelectQueryBuilder } from 'typeorm'
import { Breweries } from './breweries.entity'
import {
    paginate,
    IPaginationOptions,
    Pagination,
} from 'nestjs-typeorm-paginate'
import { UserFavoriteBreweries } from '../user-favorite-breweries/user-favorite-breweries.entity'
import { UserVisitedBreweries } from '../user-visited-breweries/user-visited-breweries.entity'

@Injectable()
export class BreweriesService {
    constructor(
        @Inject(constants.breweryRepository)
        private breweryRepository: Repository<Breweries>
    ) {}

    async paginate(
        options: IPaginationOptions,
        userId: number = undefined
    ): Promise<Pagination<Breweries>> {
        const queryBuilder = this.startQueryBuilder()

        if (userId) {
            queryBuilder
                .leftJoinAndMapOne(
                    'breweries.userFavoriteBreweries',
                    UserFavoriteBreweries,
                    'ufb',
                    `breweries.id = ufb.breweryId AND ufb.userId = ${userId}`
                )
                .leftJoinAndMapOne(
                    'breweries.userVisitedBreweries',
                    UserVisitedBreweries,
                    'uvb',
                    `breweries.id = uvb.breweryId AND uvb.userId = ${userId}`
                )
        }

        return await paginate<Breweries>(queryBuilder, options)
    }

    async findByFilters(
        options: IPaginationOptions,
        lat: number = 29.6211025,
        lng = -95.2632201,
        distance: number = 10000,
        beerType: number,
        orderByReview = 'DESC',
        userId = undefined
    ): Promise<Pagination<Breweries>> {
        const beerTypeSearch =
            beerType === undefined ? '' : `AND beer.beerType = ${beerType}`

        let queryBuilder = this.startQueryBuilder().addSelect(
            `(3959 * acos(cos(radians(${lat})) * cos(radians(lat)) * cos(radians(lng) - radians(${lng})) + sin(radians(${lat})) * sin(radians(lat ))))`,
            'breweries_distance'
        )

        if (userId) {
            queryBuilder
                .leftJoinAndMapOne(
                    'breweries.userFavoriteBreweries',
                    UserFavoriteBreweries,
                    'ufb',
                    'breweries.id = ufb.breweryId'
                )
                .leftJoinAndMapOne(
                    'breweries.userVisitedBreweries',
                    UserVisitedBreweries,
                    'uvb',
                    `breweries.id = uvb.breweryId AND uvb.userId = ${userId}`
                )
        }
        queryBuilder.where(
            `(3959 * acos(cos(radians(${lat})) * cos(radians(lat)) * cos(radians(lng) - radians(${lng})) + sin(radians(${lat})) * sin(radians(lat )))) < ${distance} ${beerTypeSearch}`
        )

        queryBuilder =
            orderByReview === 'DESC'
                ? queryBuilder.orderBy('breweries_avgReview', 'DESC')
                : queryBuilder.orderBy('breweries_avgReview', 'ASC')

        return await paginate<Breweries>(queryBuilder, options)
    }

    async findAll(): Promise<Breweries[]> {
        return this.startQueryBuilder().getMany()
    }

    async findFeaturedBreweries(
        userId: number = undefined
    ): Promise<Partial<Breweries[]>> {
        let queryBuilder = this.startQueryBuilder()

        if (userId) {
            queryBuilder
                .leftJoinAndMapOne(
                    'breweries.userFavoriteBreweries',
                    UserFavoriteBreweries,
                    'ufb',
                    'breweries.id = ufb.breweryId'
                )
                .leftJoinAndMapOne(
                    'breweries.userVisitedBreweries',
                    UserVisitedBreweries,
                    'uvb',
                    `breweries.id = uvb.breweryId AND uvb.userId = ${userId}`
                )
        }
        queryBuilder.where('breweries.isFeatured = true')
        return await queryBuilder.getMany()
    }

    async getBreweryById(breweryId: number): Promise<Breweries> {
        return this.startQueryBuilder()
            .where(`breweries.id = ${breweryId}`)
            .getOne()
    }

    async createBrewery(brewery: Breweries) {
        this.breweryRepository.save(brewery)
    }

    async deleteBrewery(brewery: Breweries) {
        this.breweryRepository.delete(brewery)
    }

    startQueryBuilder(): SelectQueryBuilder<Breweries> {
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

        return queryBuilder
    }
}
