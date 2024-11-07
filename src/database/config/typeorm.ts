import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWD,
  database: process.env.DB_ID,
  entities:
    process.env.NODE_ENV === 'production'
      ? ['dist/**/*.entity{.ts,.js}']
      : ['src/**/*.entity{.ts,.js}'],
  migrations:
    process.env.NODE_ENV === 'production'
      ? ['dist/datase/migrations/*{.ts,.js}']
      : ['src/database/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
