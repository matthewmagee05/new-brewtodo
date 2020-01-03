import { Module } from '@nestjs/common'
import { UserVisitedBreweriesController } from './user-visited-breweries.controller'
import { UserVisitedBreweriesService } from './user-visited-breweries.service'
import { DatabaseModule } from '../../database/database.module'
import { userVisitedBreweryProviders } from './user-visited-breweries.provider'

@Module({
    imports: [DatabaseModule],
    controllers: [UserVisitedBreweriesController],
    providers: [...userVisitedBreweryProviders, UserVisitedBreweriesService],
})
export class UserVisitedBreweriesModule {}
