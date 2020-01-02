import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthenticationMiddleware } from '../common/authentication.middleware'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BreweriesModule } from './breweries/breweries.module'
import { StatesModule } from './states/states.module'
import { BeerTypesModule } from './beer-types/beer-types.module'
import { BeerModule } from './beer/beer.module'
import { UserModule } from './user/user.module'
import { ReviewModule } from './review/review.module'
import { UserBeerModule } from './user-beer/user-beer.module'
import { UserPurchasedItemsModule } from './user-purchased-items/user-purchased-items.module'
import { UserFavoriteBreweriesModule } from './user-favorite-breweries/user-favorite-breweries.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        BreweriesModule,
        StatesModule,
        BeerTypesModule,
        BeerModule,
        UserModule,
        ReviewModule,
        UserBeerModule,
        UserPurchasedItemsModule,
        UserFavoriteBreweriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthenticationMiddleware)
            .forRoutes(
                { path: '/breweries', method: RequestMethod.POST },
                {
                    path: '/user-favorite-breweries',
                    method: RequestMethod.POST,
                },
                {
                    path: '/user-favorite-breweries/delete',
                    method: RequestMethod.POST,
                }
            )
    }
}
