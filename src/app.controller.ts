import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('price-taxi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

//пока для тестов будет роут каждого такси
//далее будет общий роут который несет себе аасинхронный запрос к кадлому сервису такси
