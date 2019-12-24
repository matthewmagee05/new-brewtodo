import { Controller, Get } from '@nestjs/common';
import {State} from '@brewtodo/api-interfaces';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {

    constructor(private readonly stateService: StatesService){}

    @Get()
    async findAll(): Promise<State[]> {
        return this.stateService.findAll();
    }
}
