import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';
import { constants } from '../../common/constants';

export const userProviders = [
  {
    provide: constants.userRepository,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];