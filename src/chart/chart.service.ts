import { Injectable } from '@nestjs/common';
import {CreateChartDto} from "./dto/create.chart.dto";
import {ChartRepository} from "./chart.repository";

@Injectable()
export class ChartService {
    constructor(private readonly chartRepository: ChartRepository) {}

     async getAllCharts(): Promise<CreateChartDto[]> {
        return await this.chartRepository.getAllCharts();
    }

}
