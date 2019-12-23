import { Injectable, Inject } from '@nestjs/common';
import { Brewery } from '@brewtodo/api-interfaces';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';
import { Breweries } from './breweries.entity';

@Injectable()
export class BreweriesService {
    private readonly breweries: Brewery[] = [];

  constructor(@Inject(constants.breweryRepository) private breweryRepository: Repository<Breweries>){}

  async findAll(): Promise<Brewery[]> {
    return await this.breweryRepository.find();
  }

  async createBrewery(brewery: Brewery) {
    this.breweryRepository.save(brewery);
  }

  async deleteBrewery(brewery: Brewery){
    this.breweryRepository.delete(brewery);
  }

}
