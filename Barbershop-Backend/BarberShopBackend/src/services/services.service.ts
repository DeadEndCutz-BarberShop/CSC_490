// src/services/services.service.ts
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { CreateServiceDto, UpdateServiceDto } from './servicesdtos';
import { User } from 'src/auth/User.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
    @InjectRepository(User)
    private barberRepository: Repository<User>,
  ) {}

  async create(
    barberId: number,
    createServiceDto: CreateServiceDto,
  ): Promise<Service> {
    const barber = await this.barberRepository.findOne({
      where: { id: barberId },
    });

    if (!barber) {
      throw new NotFoundException(`Barber not found`);
    }

    if (barber.role !== 'barber') {
      throw new NotFoundException(`You are not allowed to add service`);
    }

    const newService = this.serviceRepository.create({
      ...createServiceDto,
      barber: barber,
    });

    return await this.serviceRepository.save(newService);
  }

  async findAll(id: number): Promise<Service[]> {
    const services = await this.serviceRepository.find({
      where: { barber: { id } },
    });

    const servicesWithservicePic = await Promise.all(
      services?.map(async (barber) => {
        let profilePicBase64 = null;
        if (barber.servicePic && fs.existsSync(barber.servicePic)) {
          const profilePicData = fs.readFileSync(barber.servicePic);
          profilePicBase64 = profilePicData.toString('base64');
        }

        return {
          ...barber,
          servicePic: profilePicBase64,
        };
      }),
    );

    return servicesWithservicePic;
  }

  async findOne(id: number): Promise<Service> {
    try {
      const service = await this.serviceRepository.findOne({
        where: { barber: { id } },
      });
      if (!service) {
        throw new NotFoundException(`Service with ID ${id} not found`);
      }
      return service;
    } catch (error) {
      throw new Error(`Failed to find service: ${error.message}`);
    }
  }

  async update(
    id: number,
    updateServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    try {
      const existingService = await this.serviceRepository.findOne({
        where: { id },
      });
      const updatedService = Object.assign(existingService, updateServiceDto);
      return await this.serviceRepository.save(updatedService);
    } catch (error) {
      throw new Error(`Failed to update service: ${error.message}`);
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.serviceRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Service with ID ${id} not found`);
      }
    } catch (error) {
      throw new Error(`Failed to remove service: ${error.message}`);
    }
  }

  async updateServicePic(profilePic: Express.Multer.File, id: number) {
    try {
      const Service = await this.serviceRepository.findOne({
        where: {
          id,
        },
      });

      if (!Service) {
        throw new ConflictException('Service not exists');
      }
      const barberServiePicDir = path.join(
        __dirname,
        '..',
        '..',
        'barberservicepic',
      );
      if (!fs.existsSync(barberServiePicDir)) {
        fs.mkdirSync(barberServiePicDir);
      }

      const userDir = path.join(barberServiePicDir, Service.id.toString());
      if (fs.existsSync(userDir)) {
        fs.readdirSync(userDir).forEach((file) => {
          fs.unlinkSync(path.join(userDir, file));
        });
      } else {
        fs.mkdirSync(userDir);
      }

      const servicePicPath = path.join(userDir, profilePic.originalname);
      fs.writeFileSync(servicePicPath, profilePic.buffer);

      await this.serviceRepository.update(Service.id, {
        servicePic: servicePicPath,
      });

      return { message: 'Service picture updated successfully' };
    } catch (error) {
      console.log(error);
      throw new Error('Error updating service picture');
    }
  }
}
