import { Controller, Get, Param } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { v4 as uuidv4 } from 'uuid';

@Controller('api/qr')
export class QrController {
  constructor(private readonly emailService: EmailService) {}

  @Get(':email')
  async handleScan(@Param('email') email: string) {
    const qrId = uuidv4();
    await this.emailService.sendQrScannedEmail({ email, qrId });
    return { success: true };
  }
}