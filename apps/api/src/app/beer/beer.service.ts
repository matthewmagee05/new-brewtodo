import { Injectable, Inject } from '@nestjs/common';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';
import { Beer } from './beer.entity';

@Injectable()
export class BeerService {
    constructor(@Inject(constants.beerRepository) private breerRepository: Repository<Beer>){}
    
    async findAll(): Promise<Beer[]> {
        return await this.breerRepository.find({relations: ['beerType']});
      }
}
