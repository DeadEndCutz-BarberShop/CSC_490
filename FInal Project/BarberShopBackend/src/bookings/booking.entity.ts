import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/auth/User.entity';
import { Service } from 'src/services/service.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date;

  @Column({ default: 'Booked' })
  status: string;

  @Column({ nullable: true })
  cancelled: boolean;

  @Column({ nullable: true, type: 'simple-array' })
  bookedHours: string[];

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @ManyToOne(() => User)
  barber: User;

  @ManyToMany(() => Service, { cascade: true })
  @JoinTable()
  services: Service[];

  @Column({ nullable: true })
  review: string;
}
