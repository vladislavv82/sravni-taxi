import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { MaximService } from './maxim.service';

@Controller('maxim')
export class MaximController {
  constructor(private readonly maximService: MaximService) {}

  @Post() 
  @HttpCode(200)
  async getPrice(@Body() requestBody: any) {
    const { from, to } = requestBody; // Извлекаем необходимые параметры из тела запроса
    
    // Передаем извлеченные параметры в метод сервиса для обработки
    return this.maximService.getPrice(from, to);
  }
}
