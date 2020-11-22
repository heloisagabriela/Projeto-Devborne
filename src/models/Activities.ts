import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

@Entity('Activities')
class Activity {
  @PrimaryGeneratedColumn('increment')
  @Generated()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  subdescription: string;

  @Column()
  assign: string;

  @Column()
  initial_date: Date;

  @Column()
  final_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
export default Activity;
