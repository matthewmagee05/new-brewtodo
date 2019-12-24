import { Injectable, Inject } from '@nestjs/common';
import { State } from '@brewtodo/api-interfaces';
import { Repository } from 'typeorm';
import { constants } from '../../common/constants';

@Injectable()
export class StatesService {
    constructor(@Inject(constants.stateRepository) private stateRepository: Repository<State>){}

  async findAll(): Promise<State[]> {
    return await this.stateRepository.find();
  }
}
