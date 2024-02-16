import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CitymobilService } from './citymobil.service';

@Controller('citymobil')
export class CitymobilController {
  constructor(private readonly citymobilService: CitymobilService) {}

  @Post() 
  @HttpCode(200)
  async getPrice(@Body() requestBody: any) {
    const { from, to } = requestBody; // Извлекаем необходимые параметры из тела запроса

    // Передаем извлеченные параметры в метод сервиса для обработки
    return this.citymobilService.getPrice(from, to);
  }
}
