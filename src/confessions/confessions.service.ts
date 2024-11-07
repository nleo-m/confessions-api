import { Injectable } from '@nestjs/common';
import { CreateConfessionDto } from './dto/create-confession.dto';
import { UpdateConfessionDto } from './dto/update-confession.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Confession } from './entities/confession.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConfessionsService {
  constructor(
    @InjectRepository(Confession)
    private confessionsRepository: Repository<Confession>,
  ) {}

  create(createConfessionDto: CreateConfessionDto) {
    return 'This action adds a new confession';
  }

  findAll(): Promise<Confession[]> {
    return this.confessionsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} confession`;
  }

  update(id: number, updateConfessionDto: UpdateConfessionDto) {
    return `This action updates a #${id} confession`;
  }

  remove(id: number) {
    return `This action removes a #${id} confession`;
  }
}
