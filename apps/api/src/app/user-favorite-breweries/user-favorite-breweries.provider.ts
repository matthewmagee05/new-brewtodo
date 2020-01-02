import { Connection, Repository } from 'typeorm'
import { constants } from '../../common/constants'
import { UserFavoriteBreweries } from './user-favorite-breweries.entity'

export const userFavoriteBreweryProviders = [
    {
        provide: constants.userFavoriteBreweryReposiotry,
        useFactory: (connection: Connection) =>
            connection.getRepository(UserFavoriteBreweries),
        inject: ['DATABASE_CONNECTION'],
    },
]
