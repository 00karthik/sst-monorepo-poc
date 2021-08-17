import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public get(): string {
    return 'hello world';
  }
}
