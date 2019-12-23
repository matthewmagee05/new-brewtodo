import { Connection, Repository } from 'typeorm';
import { Breweries } from './breweries.entity';
import { constants } from '../../common/constants';

export const breweryProviders = [
  {
    provide: constants.breweryRepository,
    useFactory: (connection: Connection) => connection.getRepository(Breweries),
    inject: ['DATABASE_CONNECTION'],
  },
];