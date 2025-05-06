import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
@Injectable()
export class SwaggerAuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    // check API key or session
    return !!req.headers['x-swagger-token'];
  }
}
