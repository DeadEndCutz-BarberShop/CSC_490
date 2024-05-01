import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from './middlewares/token.middleware';
import { User } from './auth/User.entity';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { ServicesModule } from './services/services.module';
import { BookingsModule } from './bookings/bookings.module';
import { Service } from './services/service.entity';
import { Booking } from './bookings/booking.entity';
import { ServicesService } from './services/services.service';
import { ServicesController } from './services/services.controller';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsService } from './bookings/bookings.service';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([User, Service, Booking]),
    AuthModule,
    ServicesModule,
    BookingsModule,
    MailModule,
  ],
  controllers: [
    AppController,
    AuthController,
    ServicesController,
    BookingsController,
  ],
  providers: [
    AppService,
    AuthService,
    ServicesService,
    BookingsService,
    MailService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        'auth/register',
        'auth/signin',
        'auth/update/profile-pic',
        'auth/create-admin',
      )
      .forRoutes('*');
  }
}
