import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Logger } from '@packages/common';
// import { ApaleoClient } from '@packages/apaleo';
// import { Logger } from '@packages/common';

@Controller('trip/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  get(): any {
    Logger.infoLog('');
    return {message: 'hi'};
  }
}
