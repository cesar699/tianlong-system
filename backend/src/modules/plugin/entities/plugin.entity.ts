import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Plugin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  enabled: boolean;
}
