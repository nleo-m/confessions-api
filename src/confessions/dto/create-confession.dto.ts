import { IsString, MaxLength } from 'class-validator';

export class CreateConfessionDto {
  @IsString()
  @MaxLength(255)
  title: string;

  @IsString()
  @MaxLength(512)
  body: string;
}
