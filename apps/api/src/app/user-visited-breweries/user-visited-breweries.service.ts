import { Injectable, Inject } from '@nestjs/common'
import { constants } from '../../common/constants'
import { UserVisitedBreweries } from './user-visited-breweries.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserVisitedBreweriesService {
    constructor(
        @Inject(constants.userVisitedBreweryReposiotry)
        private userVisitedBreweryRepository: Repository<UserVisitedBreweries>
    ) {}
    deleteUserVisitedBrewery(userVisitedBrewery: UserVisitedBreweries) {
        this.userVisitedBreweryRepository.delete(userVisitedBrewery)
    }
    createUserVisitedBrewery(userVisitedBrewery: UserVisitedBreweries) {
        this.userVisitedBreweryRepository.save(userVisitedBrewery)
    }
}
