import {
    Controller,
    Get,
    Post,
    Body,
    UsePipes,
    UseGuards,
    Delete,
} from '@nestjs/common'
import { BreweriesService } from './breweries.service'
import { ValidationPipe } from '../../common/validation.pipe'
import { AdminGuard } from '../../common/admin.guard'
import { Breweries } from './breweries.entity'

@Controller('breweries')
export class BreweriesController {
    constructor(private readonly breweryService: BreweriesService) {}

    @Get()
    async findAll(): Promise<Breweries[]> {
        return this.breweryService.findAll()
    }

    @Get('featured-breweries')
    async getFeaturedBreweries(): Promise<Breweries[]> {
        return this.breweryService.findFeaturedBreweries()
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
