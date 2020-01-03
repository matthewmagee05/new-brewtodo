import { Connection, Repository } from 'typeorm'
import { constants } from '../../common/constants'
import { UserVisitedBreweries } from './user-visited-breweries.entity'

export const userVisitedBreweryProviders = [
    {
        provide: constants.userVisitedBreweryReposiotry,
        useFactory: (connection: Connection) =>
            connection.getRepository(UserVisitedBreweries),
        inject: ['DATABASE_CONNECTION'],
    },
]
