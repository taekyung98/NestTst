import { CreateChartDto } from './dto/create.chart.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { chart } from './schema/chart.schema';

@Injectable()
export class ChartRepository {
    constructor(@InjectModel(chart.name) private readonly chartModel: Model<chart>) {}

    async getAllCharts(): Promise<CreateChartDto[]> {
        // 내장된 exception filter가 해결할 수 있는 문제이기 때문에 trycatch를 하지 않아도 괜찮다.
        return this.chartModel.find();
    }
}