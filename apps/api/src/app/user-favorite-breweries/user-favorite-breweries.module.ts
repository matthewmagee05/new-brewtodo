import { Module } from '@nestjs/common'
import { UserFavoriteBreweriesController } from './user-favorite-breweries.controller'
import { UserFavoriteBreweriesService } from './user-favorite-breweries.service'
import { DatabaseModule } from '../../database/database.module'
import { userFavoriteBreweryProviders } from './user-favorite-breweries.provider'

@Module({
    imports: [DatabaseModule],
    controllers: [UserFavoriteBreweriesController],
    providers: [...userFavoriteBreweryProviders, UserFavoriteBreweriesService],
})
export class UserFavoriteBreweriesModule {}
