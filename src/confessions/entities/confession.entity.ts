import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Confession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;
}
