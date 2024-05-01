import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './createUserDto';
import { Multer } from 'multer';
import { UserSigninDto } from './userSigninDto';
import { UpdateUserDto } from './updateUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('create-admin')
  async createAdmin() {
    return this.authService.createAdmin();
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.authService.register(createUserDto);
  }

  @Post('signin')
  async signIn(@Body() UserSigninDto: UserSigninDto) {
    return this.authService.signIn(UserSigninDto);
  }

  @Post('update/profile-pic')
  @UseInterceptors(FileInterceptor('profilePic'))
  async updateProfilePic(
    @UploadedFile() profilePic: Express.Multer.File,
    @Body('userEmail') userEmail: string,
  ) {
    return this.authService.updateProfilePic(profilePic, userEmail);
  }

  @Post('update-user')
  async update(@Body() updateUserDto: UpdateUserDto, @Request() req) {
    const userId = req['user_id'];
    return await this.authService.update(userId, updateUserDto);
  }

  @Get('me')
  async getMe(@Request() req) {
    const userId = req['user_id'];
    return this.authService.getUser(userId);
  }

  @Get(':id/baber-details')
  async getBarber(@Param('id') id: string, @Request() req) {
    const userId = req['user_id'];
    return this.authService.getBarberDetails(parseInt(id), userId);
  }

  @Post('add-barber')
  async addBarber(
    @Body()
    createBarber: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    },
    @Request() req,
  ) {
    const userId = req['user_id'];
    return this.authService.createBarber(userId, createBarber);
  }

  @Get('get-barbers')
  async getBarbers(@Request() req) {
    const userId = req['user_id'];
    return this.authService.getBarbers(userId);
  }
}
