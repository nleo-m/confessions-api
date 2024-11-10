import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfessionsModule } from './confessions/confessions.module';
import { Confession } from './confessions/entities/confession.entity';
import { UsersModule } from './users/users.module';
import typeorm from './database/config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DB_ID,
      entities: [Confession],
      // synchronize: true,
    }),
    ConfessionsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
