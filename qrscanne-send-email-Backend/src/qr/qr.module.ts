import { Module } from '@nestjs/common';
import { QrController } from './qr.controller';
import { EmailService } from '../email/email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: config.get<string>('EMAIL_USER'),
            pass: config.get<string>('EMAIL_PASS'),
          },
        },
        defaults: {
          from: `"No Reply" <${config.get<string>('EMAIL_USER')}>`,
        },
      }),
    }),
  ],
  controllers: [QrController],
  providers: [EmailService],
})
export class QrModule {}