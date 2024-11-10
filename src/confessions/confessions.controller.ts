import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfessionsService } from './confessions.service';
import { CreateConfessionDto } from './dto/create-confession.dto';
import { UpdateConfessionDto } from './dto/update-confession.dto';

@Controller('confessions')
export class ConfessionsController {
  constructor(private readonly confessionsService: ConfessionsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createConfessionDto: CreateConfessionDto) {
    return this.confessionsService.create(createConfessionDto);
  }

  @Get()
  findAll() {
    return this.confessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confessionsService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateConfessionDto: UpdateConfessionDto,
  ) {
    return this.confessionsService.update(+id, updateConfessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confessionsService.remove(+id);
  }
}
