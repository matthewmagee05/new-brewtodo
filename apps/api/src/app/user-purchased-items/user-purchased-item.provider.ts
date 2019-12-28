import { Connection, Repository } from 'typeorm';
import { UserPurchasedItems } from './user-purchased-item.entity';
import { constants } from '../../common/constants';

export const userPurchasedItem = [
  {
    provide: constants.userPurchasedItemRepository,
    useFactory: (connection: Connection) => connection.getRepository(UserPurchasedItems),
    inject: ['DATABASE_CONNECTION'],
  },
];