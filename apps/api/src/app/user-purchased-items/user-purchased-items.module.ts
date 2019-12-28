import { Module } from '@nestjs/common';
import { UserPurchasedItemsService } from './user-purchased-items.service';
import { UserPurchasedItemsController } from './user-purchased-items.controller';
import { DatabaseModule } from '../../database/database.module';
import { userPurchasedItem } from './user-purchased-item.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userPurchasedItem,UserPurchasedItemsService],
  controllers: [UserPurchasedItemsController]
})
export class UserPurchasedItemsModule {}
