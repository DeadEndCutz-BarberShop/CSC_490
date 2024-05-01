import { JwtService } from '@nestjs/jwt';
import { Multer } from 'multer';
import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './createUserDto';
import { hashPassword, passwordMatch } from './bcrypt.util';
import * as fs from 'fs';
import * as path from 'path';
import { UserSigninDto } from './userSigninDto';
import { MailService } from 'src/mail/mail.service';
import { UpdateUserDto } from './updateUserDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await hashPassword(createUserDto.password);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    await this.userRepository.save(user);

    return {
      message: 'User registered successfully',
      user: { email: createUserDto.email },
    };
  }

  async signIn(
    userData: UserSigninDto,
  ): Promise<{ access_token: string; message: string }> {
    const user = await this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found or email is incorrect');
    }
    const confrimPassword = await passwordMatch(
      userData.password,
      user.password,
    );
    if (!confrimPassword) {
      throw new UnauthorizedException('Incorrect password');
    }

    const payload = { id: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
      message: 'Signin successfully',
    };
  }

  async updateProfilePic(profilePic: Express.Multer.File, userEmail: string) {
    try {
      const User = await this.userRepository.findOne({
        where: {
          email: userEmail,
        },
      });

      if (!User) {
        throw new ConflictException('User not exists');
      }
      const userProfilePicDir = path.join(
        __dirname,
        '..',
        '..',
        'userprofilepic',
      );
      if (!fs.existsSync(userProfilePicDir)) {
        fs.mkdirSync(userProfilePicDir);
      }

      const userDir = path.join(userProfilePicDir, User.id.toString());
      if (fs.existsSync(userDir)) {
        fs.readdirSync(userDir).forEach((file) => {
          fs.unlinkSync(path.join(userDir, file));
        });
      } else {
        fs.mkdirSync(userDir);
      }

      const profilePicPath = path.join(userDir, profilePic.originalname);
      fs.writeFileSync(profilePicPath, profilePic.buffer);

      await this.userRepository.update(User.id, { profilePic: profilePicPath });

      return { message: 'Profile picture updated successfully' };
    } catch (error) {
      console.log(error);
      throw new Error('Error updating profile picture');
    }
  }

  async update(id: number, updateuserDto: UpdateUserDto): Promise<User> {
    try {
      const existingUser = await this.userRepository.findOne({
        where: { id },
      });
      const updatedUser = Object.assign(existingUser, updateuserDto);
      return await this.userRepository.save(updatedUser);
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async getUser(userId: number) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: userId },
        relations: [
          'services',
          'bookings',
          'bookings.services',
          'bookings.user',
          'bookings.barber',
          'barberBookings',
          'barberBookings.user',
          'barberBookings.barber',
          'barberBookings.services',
        ],
      });

      if (user.role === 'barber') {
        user.bookings = user.barberBookings;
      }
      let profilePicBase64 = null;
      if (user.profilePic && fs.existsSync(user.profilePic)) {
        const profilePicData = fs.readFileSync(user.profilePic);
        profilePicBase64 = profilePicData.toString('base64');
      }

      const userWithProfilePic = {
        ...user,
        profilePic: profilePicBase64,
      };

      const barbersWithProfilePics = await Promise.all(
        userWithProfilePic?.services.map(async (service) => {
          let servicePicBase64 = null;
          if (service.servicePic && fs.existsSync(service.servicePic)) {
            const profilePicData = fs.readFileSync(service.servicePic);
            servicePicBase64 = profilePicData.toString('base64');
          }

          return {
            ...service,
            servicePic: servicePicBase64,
          };
        }),
      );

      return { ...userWithProfilePic, services: barbersWithProfilePics };
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching user with profile pic');
    }
  }

  async createAdmin() {
    try {
      const existingAdmin = await this.userRepository.findOne({
        where: { role: 'admin' },
      });
      if (existingAdmin) {
        throw new ConflictException('Admin user already exists');
      }

      const adminUser = this.userRepository.create({
        email: 'admin@example.com',
        password: await hashPassword('adminPassword'),
        role: 'admin',
      });

      await this.userRepository.save(adminUser);

      return {
        message: 'Admin user created successfully',
        user: { email: 'admin@example.com' },
      };
    } catch (error) {
      console.error(error);
      throw new ConflictException(error?.response?.message);
    }
  }

  async createBarber(
    id: number,
    createBarber: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    },
  ) {
    const adminUser = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (adminUser.role !== 'admin') {
      throw new UnauthorizedException('You are not allow to add barber');
    }

    const existingBarber = await this.userRepository.findOne({
      where: {
        email: createBarber?.email,
      },
    });
    if (existingBarber) {
      throw new ConflictException('Barber already exists');
    }

    const hashedPassword = await hashPassword(createBarber.password);
    const user = this.userRepository.create({
      ...createBarber,
      password: hashedPassword,
      role: 'barber',
    });
    await this.mailService.sendPasswordAndEmailToBarberByAdmin(
      user,
      createBarber.password,
    );
    await this.userRepository.save(user);

    return {
      message: 'Barber added successfully',
      user: { email: createBarber.email },
    };
  }

  async getBarbers(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const barbers = await this.userRepository.find({
      where: { role: 'barber' },
      order: {
        id: 'DESC',
      },
    });

    const barbersWithProfilePics = await Promise.all(
      barbers?.map(async (barber) => {
        let profilePicBase64 = null;
        if (barber.profilePic && fs.existsSync(barber.profilePic)) {
          const profilePicData = fs.readFileSync(barber.profilePic);
          profilePicBase64 = profilePicData.toString('base64');
        }

        return {
          ...barber,
          profilePic: profilePicBase64,
        };
      }),
    );

    return barbersWithProfilePics;
  }

  async getBarberDetails(id: number, userId) {
    const barber = await this.userRepository.findOne({
      where: { id },
      relations: ['services'],
    });

    if (!barber) {
      throw new NotFoundException('User not found');
    }

    let profilePicBase64 = null;
    if (barber.profilePic && fs.existsSync(barber.profilePic)) {
      const profilePicData = fs.readFileSync(barber.profilePic);
      profilePicBase64 = profilePicData.toString('base64');
    }

    const barberWithProfilePic = {
      ...barber,
      profilePic: profilePicBase64,
      services: barber.services.map((service) => ({
        ...service,
        servicePic:
          service.servicePic && fs.existsSync(service.servicePic)
            ? fs.readFileSync(service.servicePic).toString('base64')
            : null,
      })),
    };

    return barberWithProfilePic;
  }
}
