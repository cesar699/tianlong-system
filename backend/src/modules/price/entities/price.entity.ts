import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PriceMonitor {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() url: string;
  @Column('decimal') threshold: number;
}
