
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as speakeasy from 'speakeasy';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async enableTwoFactor(userId: number): Promise<string> {
    const secret = speakeasy.generateSecret();
    await this.userRepository.update(userId, {
      twoFactorSecret: secret.base32,
      twoFactorEnabled: true,
    });
    return secret.otpauth_url;
  }

  async verifyTwoFactor(userId: number, token: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user?.twoFactorSecret) return false;
    return speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token,
    });
  }
}
