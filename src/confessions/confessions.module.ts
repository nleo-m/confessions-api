import { Module } from '@nestjs/common';
import { ConfessionsService } from './confessions.service';
import { ConfessionsController } from './confessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Confession } from './entities/confession.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Confession])],
  controllers: [ConfessionsController],
  providers: [ConfessionsService],
})
export class ConfessionsModule {}
