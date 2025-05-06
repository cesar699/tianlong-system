import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  level: string;  // e.g., INFO, ERROR

  @Column('text')
  message: string;

  @Column('json', { nullable: true })
  meta: any;

  @CreateDateColumn()
  timestamp: Date;
}
