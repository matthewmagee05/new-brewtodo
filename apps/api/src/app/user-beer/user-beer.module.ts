import { Module } from '@nestjs/common';
import { UserBeerController } from './user-beer.controller';
import { UserBeerService } from './user-beer.service';
import { userBeerProviders } from './user-beer.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserBeerController],
  providers: [...userBeerProviders,UserBeerService]
})
export class UserBeerModule {}
