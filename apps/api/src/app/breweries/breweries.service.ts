import { Injectable } from '@nestjs/common';
import { Brewery } from './brewery.interface';

@Injectable()
export class BreweriesService {
    private readonly breweries: Brewery[] = [];

  findAll(): Brewery[] {
    return this.breweries;
  }

  create(brewery: Brewery) {
    this.breweries.push(brewery);
  }
}
