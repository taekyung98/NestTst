import { Module } from '@nestjs/common';
import { ChartController } from './chart.controller';
import { ChartService } from './chart.service';
import {Chart, ChartSchema} from "./schema/chart.schema";
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {ChartRepository} from "./chart.repository";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === 'production' ? '.env' : '.env.dev',
      isGlobal: true,
    }),
    MongooseModule.forFeature([
      { name: Chart.name, schema: ChartSchema },
    ]),
  ],
  controllers: [ChartController],
  providers: [ChartService,ChartRepository]
})
export class ChartModule {}
