import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaximModule } from './maxim/maxim.module';
import { YandexModule } from './yandex/yandex.module';
import { CitymobilModule } from './citymobil/citymobil.module';

@Module({
  imports: [MaximModule, YandexModule, CitymobilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
