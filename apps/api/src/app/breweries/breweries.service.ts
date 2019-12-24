import { Injectable, Inject } from '@nestjs/common';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';
import { Breweries } from './breweries.entity';

@Injectable()
export class BreweriesService {

  constructor(@Inject(constants.breweryRepository) private breweryRepository: Repository<Breweries>){}

  async findAll(): Promise<Breweries[]> {
    return await this.breweryRepository.find({relations: [ 'state','beer' ]})
  }

  async createBrewery(brewery: Breweries) {
    this.breweryRepository.save(brewery);
  }

  async deleteBrewery(brewery: Breweries){
    this.breweryRepository.delete(brewery);
  }

}
