
import { Injectable, CanActivate, ExecutionContext, RequestTimeoutException } from '@nestjs/common';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const limiter = new RateLimiterMemory({
  points: 10, // 10 requests
  duration: 1, // per second
});

@Injectable()
export class RateLimitGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      await limiter.consume(req.ip);
      return true;
    } catch {
      throw new RequestTimeoutException('Too many requests');
    }
  }
}
