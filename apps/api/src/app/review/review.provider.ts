import { Connection, Repository } from 'typeorm';
import { Review } from './review.entity';
import { constants } from '../../common/constants';

export const reviewProviders = [
  {
    provide: constants.reviewRepository,
    useFactory: (connection: Connection) => connection.getRepository(Review),
    inject: ['DATABASE_CONNECTION'],
  },
];