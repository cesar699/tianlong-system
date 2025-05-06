import { Controller, Get } from '@nestjs/common';
import { SecurityService } from './security.service';

@Controller('security')
export class SecurityController {
  constructor(private readonly service: SecurityService) {}

  @Get()
  getInfo() {
    return { message: 'security module placeholder' };
  }
}