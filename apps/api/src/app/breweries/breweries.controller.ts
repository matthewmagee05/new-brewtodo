import { Controller, Get, Post, Body, UsePipes, UseGuards, Delete } from '@nestjs/common';
import { BreweriesService } from './breweries.service';
import { Brewery } from '@brewtodo/api-interfaces';
import { ValidationPipe } from '../../common/validation.pipe';
import { CreateBreweryDto } from './create-brewery.dto';
import { AdminGuard } from '../../common/admin.guard';

@Controller('breweries')
export class BreweriesController {
    constructor(private readonly breweryService: BreweriesService) {}
    @Get()
    async findAll(): Promise<Brewery[]> {
        return this.breweryService.findAll();
    }
  
    @Post()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async create(@Body() createBreweryDto: CreateBreweryDto) {
        this.breweryService.createBrewery(createBreweryDto);
    }

    @Delete()
    @UseGuards(new AdminGuard())
    @UsePipes(new ValidationPipe())
    async delete(@Body() createBreweryDto: CreateBreweryDto){
        this.breweryService.deleteBrewery(createBreweryDto);
    }
}


