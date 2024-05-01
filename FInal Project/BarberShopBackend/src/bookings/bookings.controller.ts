// src/bookings/bookings.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Request,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.entity';
import { CreateBookingDto, UpdateBookingDto } from './bookingdtos';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(
    @Body() createBookingDto: CreateBookingDto,
    @Request() req,
  ): Promise<Booking> {
    const userId = req['user_id'];
    return this.bookingsService.create(userId, createBookingDto);
  }

  @Get()
  async findAll(@Request() req): Promise<Booking[]> {
    const userId = req['user_id'];
    return this.bookingsService.find(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Booking> {
    return this.bookingsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return this.bookingsService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.bookingsService.remove(+id);
  }
}
