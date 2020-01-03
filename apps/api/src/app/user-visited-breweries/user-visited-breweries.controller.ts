import {
    Controller,
    Post,
    UseGuards,
    UsePipes,
    Body,
    ValidationPipe,
} from '@nestjs/common'
import { UserVisitedBreweriesService } from './user-visited-breweries.service'
import { UserGuard } from '../../common/user.guard'
import { UserVisitedBreweries } from './user-visited-breweries.entity'

@Controller('user-visited-breweries')
export class UserVisitedBreweriesController {
    constructor(
        private userVisitedBreweryService: UserVisitedBreweriesService
    ) {}

    @Post()
    @UseGuards(new UserGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() userVisitedBrewery: UserVisitedBreweries) {
        this.userVisitedBreweryService.createUserVisitedBrewery(
            userVisitedBrewery
        )
    }

    @Post('delete')
    @UseGuards(new UserGuard())
    @UsePipes(new ValidationPipe())
    async delete(@Body() userVisitedBrewery: UserVisitedBreweries) {
        this.userVisitedBreweryService.deleteUserVisitedBrewery(
            userVisitedBrewery
        )
    }
}
