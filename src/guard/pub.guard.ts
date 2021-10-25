import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class AuthAPIKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const field = fs
      .readFileSync(join(__dirname, '../..', 'keyAPI_field.pub'), 'utf-8')
      .replace(/(\r\n|\n|\r|s)/gm, '')
      .trim()
      .toLowerCase();
    const token = fs
      .readFileSync(join(__dirname, '../..', 'keyAPI.pub'), 'utf-8')
      .replace(/(\r\n|\n|\r|s)/gm, '')
      .trim()
      .toLowerCase();

    const request = context.switchToHttp().getRequest();
    // console.log('Check guards request headers: ', request.headers);

    // check for basic auth header
    if (!request.headers[field]) {
      return false;
    }

    // verify auth credentials
    if (!(request.headers[field] === token)) {
      return false;
    }

    return true;
  }
}
