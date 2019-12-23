import { createConnection } from 'typeorm';
import { Breweries } from '../app/breweries/breweries.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: 3306,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      entities: [
       Breweries,
      ],
      database: process.env.TYPEORM_DATABASE
    }),
  },
];