
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as xss from 'xss';

@Injectable()
export class XssInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    if (req.body) {
      req.body = JSON.parse(xss(JSON.stringify(req.body)));
    }
    return next.handle().pipe(map(data => data));
  }
}
