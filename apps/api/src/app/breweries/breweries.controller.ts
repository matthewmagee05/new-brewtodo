import {
    Controller,
    Get,
    Post,
    Body,
    UsePipes,
    UseGuards,
    Delete,
    Param,
    Query,
} from '@nestjs/common'
import { BreweriesService } from './breweries.service'
import { ValidationPipe } from '../../common/validation.pipe'
import { AdminGuard } from '../../common/admin.guard'
import { Breweries } from './breweries.entity'

@Controller('breweries')
export class BreweriesController {
    constructor(private readonly breweryService: BreweriesService) {}

    @Get('')
    async index(
        @Query('page') page: number = 0,
        @Query('limit') limit: number = 10
    ) {
        limit = limit > 100 ? 100 : limit
        return await this.breweryService.paginate({
            page,
            limit,
            route: 'http://localhost:4200/api/breweries/',
        })
    }

    @Get('featured-breweries')
    async getFeaturedBreweries(): Promise<Breweries[]> {
        return this.breweryService.findFeaturedBreweries()
    }

    @Get('brewery/:breweryId')
    async getBreweryById(@Param('breweryId') breweryId): Promise<Breweries> {
        return this.breweryService.getBreweryById(breweryId)
    }

    @Post()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() brewery: Breweries) {
        this.breweryService.createBrewery(brewery)
    }

    @Delete()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async delete(@Body() brewery: Breweries) {
        this.breweryService.deleteBrewery(brewery)
    }
}
