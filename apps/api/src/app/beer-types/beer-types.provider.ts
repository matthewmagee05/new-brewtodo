import { Connection, Repository } from 'typeorm';
import { BeerType } from './beer-types.entities';
import { constants } from '../../common/constants';

export const beerTypesProviders = [
  {
    provide: constants.beerTypesRepository,
    useFactory: (connection: Connection) => connection.getRepository(BeerType),
    inject: ['DATABASE_CONNECTION'],
  },
];