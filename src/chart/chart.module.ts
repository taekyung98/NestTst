import { Module } from '@nestjs/common';
import { ChartController } from './chart.controller';
import { ChartService } from './chart.service';
import {chart, ChartSchema} from "./schema/chart.schema";
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {ChartRepository} from "./chart.repository";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forFeature([
      { name: chart.name, schema: ChartSchema },
    ]),
  ],
  controllers: [ChartController],
  providers: [ChartService,ChartRepository]
})
export class ChartModule {}
