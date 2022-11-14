import { CreateChartDto } from './dto/create.chart.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chart,ChartDocument } from './schema/chart.schema';

@Injectable()
export class ChartRepository {
    constructor(@InjectModel(Chart.name) private chartModel: Model<ChartDocument>) {}

    async getAllCharts(): Promise<string[]> {
        // 내장된 exception filter가 해결할 수 있는 문제 ->  trycatch를 하지 않아도 ok
        return this.chartModel.find({});
    }

    async createChart(chartData: CreateChartDto) {
        return this.chartModel.create({...chartData});
    }

}