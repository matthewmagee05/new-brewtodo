import { Controller, Get } from '@nestjs/common';
import { BeerTypesService } from './beer-types.service';
import { BeerType } from './beer-types.entities';

@Controller('beer-types')
export class BeerTypesController {
    constructor(private readonly beerTypesService: BeerTypesService){}

    @Get()
    async findAll(): Promise<BeerType[]> {
        return this.beerTypesService.findAll();
    }
}

