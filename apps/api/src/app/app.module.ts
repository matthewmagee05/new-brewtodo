import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BreweriesController} from './breweries/breweries.controller';
import { BreweriesService } from './breweries/breweries.service';
import { AuthenticationMiddleware } from '../common/authentication.middleware';
import { ConfigModule } from '@nestjs/config';
import database from '../config/database.config';

@Module({
  imports: [ConfigModule.forRoot( {isGlobal: true, load: [database]})],
  controllers: [AppController, BreweriesController],
  providers: [AppService, BreweriesService]
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/breweries', method: RequestMethod.POST }
      );
  }
}
