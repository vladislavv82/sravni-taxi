import { Module } from '@nestjs/common';
import { MaximService } from './maxim.service';
import { MaximController } from './maxim.controller';

@Module({
  controllers: [MaximController],
  providers: [MaximService],
})
export class MaximModule {}
