import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Service } from 'src/services/service.entity';
import { Booking } from 'src/bookings/booking.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  profilePic: string;

  @Column({ nullable: true, type: 'simple-array' })
  availableHours: string[];

  @Column({ nullable: true })
  averageRating: number;

  @OneToMany(() => Service, (service) => service.barber)
  services: Service[];

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];

  @OneToMany(() => Booking, (booking) => booking.barber)
  barberBookings: Booking[];
}
