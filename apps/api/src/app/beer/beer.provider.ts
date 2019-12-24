import { Connection, Repository } from 'typeorm';
import { constants } from '../../common/constants';
import { Beer } from './beer.entity';

export const beerProviders = [
  {
    provide: constants.beerRepository,
    useFactory: (connection: Connection) => connection.getRepository(Beer),
    inject: ['DATABASE_CONNECTION'],
  },
];