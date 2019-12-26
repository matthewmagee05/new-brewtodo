import { Connection, Repository } from 'typeorm';
import { UserBeers } from './user-beer.entity';
import { constants } from '../../common/constants';

export const userBeerProviders = [
  {
    provide: constants.userBeerRepository,
    useFactory: (connection: Connection) => connection.getRepository(UserBeers),
    inject: ['DATABASE_CONNECTION'],
  },
];