import { createConnection } from 'typeorm'
import { Breweries } from '../app/breweries/breweries.entity'
import { States } from '../app/states/state.entity'
import { BeerType } from '../app/beer-types/beer-types.entities'
import { Beer } from '../app/beer/beer.entity'
import { User } from '../app/user/user.entity'
import { Review } from '../app/review/review.entity'
import { UserBeers } from '../app/user-beer/user-beer.entity'
import { UserPurchasedItems } from '../app/user-purchased-items/user-purchased-item.entity'
import { UserFavoriteBreweries } from '../app/user-favorite-breweries/user-favorite-breweries.entity'
import { UserVisitedBreweries } from '../app/user-visited-breweries/user-visited-breweries.entity'

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () =>
            await createConnection({
                type: 'mysql',
                connectTimeout: 60 * 60 * 1000,
                host: process.env.TYPEORM_HOST,
                port: 3306,
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                logging: true,
                entities: [
                    Breweries,
                    States,
                    BeerType,
                    Beer,
                    User,
                    Review,
                    UserBeers,
                    UserPurchasedItems,
                    UserFavoriteBreweries,
                    UserVisitedBreweries,
                ],
                database: process.env.TYPEORM_DATABASE,
            }),
    },
]
