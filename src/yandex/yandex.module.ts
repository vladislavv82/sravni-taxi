import { Module } from '@nestjs/common';
import { YandexService } from './yandex.service';
import { YandexController } from './yandex.controller';
import { MaximService } from 'src/maxim/maxim.service';

@Module({
  controllers: [YandexController],
  providers: [YandexService, MaximService],
})
export class YandexModule {}
