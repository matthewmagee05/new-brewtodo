import { Module} from '@nestjs/common';

import {BreweriesController} from '../breweries/breweries.controller';
import { BreweriesService } from '../breweries/breweries.service';
import { DatabaseModule } from '../../database/database.module';
import { breweryProviders } from './breweries.provider';

@Module({
    imports: [DatabaseModule],
    providers: [...breweryProviders, BreweriesService],
    controllers: [BreweriesController],
  })
  
  export class BreweriesModule { }
