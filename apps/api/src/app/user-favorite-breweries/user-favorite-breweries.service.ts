import { Injectable, Inject } from '@nestjs/common'
import { constants } from '../../common/constants'
import { Repository } from 'typeorm'
import { UserFavoriteBreweries } from './user-favorite-breweries.entity'

@Injectable()
export class UserFavoriteBreweriesService {
    constructor(
        @Inject(constants.userFavoriteBreweryReposiotry)
        private userFavoriteBreweryRepository: Repository<UserFavoriteBreweries>
    ) {}

    async createUserFavoriteBrewery(
        userFavoriteBrewery: UserFavoriteBreweries
    ) {
        this.userFavoriteBreweryRepository.save(userFavoriteBrewery)
    }

    async deleteUserFavoriteBrewery(
        userFavoriteBrewery: UserFavoriteBreweries
    ) {
        this.userFavoriteBreweryRepository.delete(userFavoriteBrewery)
    }
}
