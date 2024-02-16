import { Controller } from '@nestjs/common';
import { YandexService } from './yandex.service';

@Controller('yandex')
export class YandexController {
  constructor(private readonly yandexService: YandexService) {}
}
