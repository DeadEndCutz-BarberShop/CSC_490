import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../auth/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendPasswordAndEmailToBarberByAdmin(user: User, password: any) {
    await this.mailerService
      .sendMail({
        to: user.email,
        subject: 'Barber Login Credentials',
        template: './invite',
        context: {
          name: user?.firstName + user?.lastName,
          email: user?.email,
          password: password,
        },
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
