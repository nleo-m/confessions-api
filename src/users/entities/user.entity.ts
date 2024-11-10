import { hashPassword } from 'src/utils/hashPassword';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  bio: string;

  @BeforeInsert()
  @BeforeUpdate()
  async handlePassword() {
    console.log('pass: ', this.password);
    this.password = await hashPassword(this.password);
  }
}
