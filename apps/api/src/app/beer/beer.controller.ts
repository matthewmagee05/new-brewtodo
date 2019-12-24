import { Controller, Get } from '@nestjs/common';
import { BeerService } from './beer.service';
import { Beer } from './beer.entity';

@Controller('beer')
export class BeerController {
    constructor(private readonly beerService: BeerService){}

    @Get()
    async findAll(): Promise<Beer[]> {
        return this.beerService.findAll();
    }
}
