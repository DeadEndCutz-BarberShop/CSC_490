import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { User } from 'src/auth/User.entity';
import { Booking } from 'src/bookings/booking.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  servicePic: string;

  @ManyToOne(() => User, (user) => user.services)
  barber: User;

  @ManyToMany(() => Booking, (booking) => booking.services)
  bookings: Booking[];

  // Additional fields
  @Column({ nullable: true })
  rating: number;

  @Column({ nullable: true })
  numRatings: number;
}
