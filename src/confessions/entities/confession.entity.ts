import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'confessions' })
export class Confession {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;
}
