import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { YandexService } from './yandex.service';

@Controller('yandex')
export class YandexController {
  constructor(private readonly yandexService: YandexService) {}

  @Post() 
  @HttpCode(200)
  async getPrice(@Body() requestBody: any) {
    const { from, to } = requestBody; // Извлекаем необходимые параметры из тела запроса
    
    // Передаем извлеченные параметры в метод сервиса для обработки
    return this.yandexService;
  }
}
