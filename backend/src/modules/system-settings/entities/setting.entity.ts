import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Setting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  key: string;

  @Column('text')
  value: string;
}
