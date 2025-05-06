
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class LoginHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column() userId: string;
  @Column() success: boolean;
  @Column('text', { nullable: true }) ip: string;
  @CreateDateColumn() timestamp: Date;
}
