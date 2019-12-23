import { Module } from '@nestjs/common';
import {DatabaseConfigService} from './database.providers';

@Module({
    providers: [DatabaseConfigService],
    exports: [DatabaseConfigService],
})
export class DatabaseModule {}
