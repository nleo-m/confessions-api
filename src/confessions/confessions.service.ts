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
    return this.confessionsRepository.save(createConfessionDto);
  }

  findAll(): Promise<Confession[]> {
    return this.confessionsRepository.find();
  }

  findOne(id: number) {
    return this.confessionsRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateConfessionDto: UpdateConfessionDto) {
    return this.confessionsRepository.update(id, updateConfessionDto);
  }

  async remove(id: number) {
    const confession = await this.confessionsRepository.findOne({
      where: { id: id },
    });

    return this.confessionsRepository.remove(confession);
  }
}
