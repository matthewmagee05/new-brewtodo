import {
    Controller,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
    Body,
    Delete,
} from '@nestjs/common'
import { UserGuard } from '../../common/user.guard'
import { UserFavoriteBreweries } from './user-favorite-breweries.entity'
import { UserFavoriteBreweriesService } from './user-favorite-breweries.service'

@Controller('user-favorite-breweries')
export class UserFavoriteBreweriesController {
    constructor(
        private userFavoriteBreweryService: UserFavoriteBreweriesService
    ) {}

    @Post()
    @UseGuards(new UserGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() userFavoriteBrewery: UserFavoriteBreweries) {
        this.userFavoriteBreweryService.createUserFavoriteBrewery(
            userFavoriteBrewery
        )
    }

    @Post('delete')
    @UseGuards(new UserGuard())
    @UsePipes(new ValidationPipe())
    async delete(@Body() userFavoriteBrewery: UserFavoriteBreweries) {
        this.userFavoriteBreweryService.deleteUserFavoriteBrewery(
            userFavoriteBrewery
        )
    }
}
