// Entity for scheduled tasks
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CronTask {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column() name: string;
  @Column() cron: string;
  @Column() enabled: boolean;
  @Column('json') payload: any;
}
