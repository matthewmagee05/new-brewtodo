import { Connection, Repository } from 'typeorm';
import { States } from './state.entity';
import { constants } from '../../common/constants';

export const stateProviders = [
  {
    provide: constants.stateRepository,
    useFactory: (connection: Connection) => connection.getRepository(States),
    inject: ['DATABASE_CONNECTION'],
  },
];