// src/bookings/dtos/bookings.dtos.ts
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateServiceDto } from 'src/services/servicesdtos';

export class CreateBookingDto {
  @IsOptional()
  @IsString({ each: true })
  bookedHours?: string[];

  @IsNotEmpty()
  @IsString()
  date?: string;

  @IsNotEmpty()
  @IsNumber()
  barberId: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateServiceDto)
  services: CreateServiceDto[];
}

export class UpdateBookingDto {
  @IsDateString()
  @IsOptional()
  date?: Date;

  @IsString()
  @IsOptional()
  status?: string;

  @IsOptional()
  @IsBoolean()
  cancelled?: boolean;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsString()
  review?: string;
}
