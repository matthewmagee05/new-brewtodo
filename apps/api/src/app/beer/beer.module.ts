import { Module } from '@nestjs/common';
import { BeerController } from './beer.controller';
import { BeerService } from './beer.service';
import { DatabaseModule } from '../../database/database.module';
import { beerProviders } from './beer.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BeerController],
  providers: [...beerProviders,BeerService]
})
export class BeerModule {}
