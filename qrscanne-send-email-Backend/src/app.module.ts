import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { QrController } from './qr/qr.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com', // Your SMTP host
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      }
    })
  ],
  controllers: [AppController, QrController],
  providers: [AppService, EmailService]
})
export class AppModule {}
