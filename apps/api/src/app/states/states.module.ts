import { Module } from '@nestjs/common';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { DatabaseModule } from '../../database/database.module';
import { stateProviders } from './state.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [StatesController],
  providers: [...stateProviders, StatesService]
})
export class StatesModule {}
