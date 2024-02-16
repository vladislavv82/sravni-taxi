import { Module } from '@nestjs/common';
import { CitymobilService } from './citymobil.service';
import { CitymobilController } from './citymobil.controller';

@Module({
  controllers: [CitymobilController],
  providers: [CitymobilService],
})
export class CitymobilModule {}
