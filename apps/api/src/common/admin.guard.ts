import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user = context.getArgs()[0].user['http://localhost:4200/api/roles'] || '';
    return user.indexOf('admin') > -1;
  }
}