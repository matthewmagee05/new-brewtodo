import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationMiddleware } from '../common/authentication.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreweriesModule } from './breweries/breweries.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BreweriesModule],
  controllers: [AppController],
  providers: [AppService]
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
