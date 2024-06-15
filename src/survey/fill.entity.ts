import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Survey } from './survey.entity';

@Entity()
export class Fill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Survey, (survey) => survey.fills)
  survey: Survey;

  @Column()
  response: string;

  @CreateDateColumn()
  createdAt: Date;
}
