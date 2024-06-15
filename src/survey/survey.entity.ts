import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Fill } from './fill.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  targetAudience: string;

  @Column()
  starRating: number;

  @Column()
  contactEmail: string;

  @OneToMany(() => Fill, (fill) => fill.survey)
  fills: Fill[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
