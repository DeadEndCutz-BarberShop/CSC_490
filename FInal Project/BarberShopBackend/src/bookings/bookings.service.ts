// src/bookings/bookings.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto, UpdateBookingDto } from './bookingdtos';
import { User } from 'src/auth/User.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(
    userId: number,
    createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });
      const barber = await this.userRepository.findOne({
        where: { id: createBookingDto?.barberId },
      });
      if (!barber.bookings) {
        barber.bookings = [];
      }
      const newBooking = this.bookingRepository.create({
        ...createBookingDto,
        user: user,
        barber: barber,
      });
      barber.bookings.push(newBooking);
      await this.userRepository.save(barber);
      return await this.bookingRepository.save(newBooking);
    } catch (error) {
      throw new Error(`Failed to create booking: ${error.message}`);
    }
  }

  async find(userId: number): Promise<Booking[]> {
    try {
      return await this.bookingRepository.find();
    } catch (error) {
      throw new Error(`Failed to fetch bookings: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Booking> {
    try {
      const booking = await this.bookingRepository.findOne({
        where: { user: { id } },
      });
      if (!booking) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
      return booking;
    } catch (error) {
      throw new Error(`Failed to find booking: ${error.message}`);
    }
  }

  async update(
    id: number,
    updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    try {
      const existingBooking = await this.findOne(id);
      const updatedBooking = Object.assign(existingBooking, updateBookingDto);
      return await this.bookingRepository.save(updatedBooking);
    } catch (error) {
      throw new Error(`Failed to update booking: ${error.message}`);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.bookingRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
    } catch (error) {
      throw new Error(`Failed to remove booking: ${error.message}`);
    }
  }
}
