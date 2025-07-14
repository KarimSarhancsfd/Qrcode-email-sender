import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

export class EmailPayload {
  email: string;
  qrId: string;
}

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendQrScannedEmail(payload: EmailPayload) {
    await this.mailerService.sendMail({
      to: payload.email,
      subject: 'QR Code Scanned',
      html: `<p>QR Code ${payload.qrId} was scanned!</p>`
    });
  }
}