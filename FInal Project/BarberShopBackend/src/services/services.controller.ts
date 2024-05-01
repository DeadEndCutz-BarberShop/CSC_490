import { UpdateServiceDto, CreateServiceDto } from '../services/servicesdtos';
// src/services/services.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Request,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ServicesService } from 'src/services/services.service';
import { Service } from 'src/services/service.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('add-service')
  async create(
    @Body() createServiceDto: CreateServiceDto,
    @Request() req,
  ): Promise<Service> {
    const barberId = req['user_id'];
    return await this.servicesService.create(barberId, createServiceDto);
  }

  @Post('update/service-pic')
  @UseInterceptors(FileInterceptor('servicePic'))
  async updateServicePic(
    @UploadedFile() profilePic: Express.Multer.File,
    @Body('service_id') serviceId: number,
    @Request() req,
  ) {
    return this.servicesService.updateServicePic(profilePic, serviceId);
  }

  @Get('get-services')
  async findAll(@Request() req): Promise<Service[]> {
    const barberId = req['user_id'];
    return await this.servicesService.findAll(barberId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Service> {
    return await this.servicesService.findOne(+id);
  }

  @Post('update-service/:id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    return await this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.servicesService.remove(+id);
  }
}
