import { Injectable, Inject } from '@nestjs/common';
import { BeerType } from './beer-types.entities';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';

@Injectable()
export class BeerTypesService {

    constructor(@Inject(constants.beerTypesRepository) private breerTypesRepository: Repository<BeerType>){}
    async findAll(): Promise<BeerType[]> {
        return await this.breerTypesRepository.find();
      }
    
}
