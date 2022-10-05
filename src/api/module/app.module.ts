import { Module } from '@nestjs/common';
import { AppController } from '../controlles/app.controller';
import { AppService } from '../services/app.service';
import {CurrencyPriceController} from "../controlles/currencyPriceController";

@Module({
  imports: [],
  controllers: [AppController, CurrencyPriceController],
  providers: [AppService],
})
export class AppModule {}
