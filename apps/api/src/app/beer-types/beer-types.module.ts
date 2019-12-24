import { Module } from '@nestjs/common';
import { BeerTypesController } from './beer-types.controller';
import { BeerTypesService } from './beer-types.service';
import { beerTypesProviders } from './beer-types.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BeerTypesController],
  providers: [...beerTypesProviders,BeerTypesService]
})
export class BeerTypesModule {}
