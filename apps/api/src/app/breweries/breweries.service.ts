import { Injectable, Inject } from '@nestjs/common'
import { constants } from '../../common/constants'
import { Repository } from 'typeorm'
import { Breweries } from './breweries.entity'

@Injectable()
export class BreweriesService {
    constructor(
        @Inject(constants.breweryRepository)
        private breweryRepository: Repository<Breweries>
    ) {}

    async findAll(): Promise<Breweries[]> {
        return await this.breweryRepository.find({
            relations: ['state', 'beer', 'review', 'review.user'],
        })
    }

    async findFeaturedBreweries(): Promise<Partial<Breweries[]>> {
        let results = await this.breweryRepository.find({
            relations: ['state', 'beer', 'review', 'review.user'],
            where: { isFeatured: true },
        })

        if (results !== null) {
            results = this.calculateAverageReview(results)
        }

        return results
    }

    async createBrewery(brewery: Breweries) {
        this.breweryRepository.save(brewery)
    }

    async deleteBrewery(brewery: Breweries) {
        this.breweryRepository.delete(brewery)
    }

    calculateAverageReview(breweries: Breweries[]) {
        breweries.forEach(brewery => {
            const total =
                brewery.review.reduce((p, c) => {
                    return p + parseFloat(c.rating)
                }, 0) / brewery.review.length
            brewery.avgReview = isNaN(total) ? 0 : Math.round(total)
        })

        return breweries
    }
}
