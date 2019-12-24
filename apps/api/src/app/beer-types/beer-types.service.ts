import { Injectable, Inject } from '@nestjs/common';
import { BeerTypes } from './beer-types.entities';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';

@Injectable()
export class BeerTypesService {

    constructor(@Inject(constants.beerTypesRepository) private breerTypesRepository: Repository<BeerTypes>){}
    async findAll(): Promise<BeerTypes[]> {
        return await this.breerTypesRepository.find();
      }
    
}
