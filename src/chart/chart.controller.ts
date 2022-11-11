import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ChartService} from "./chart.service";
import {CreateChartDto} from "./dto/create.chart.dto";

@Controller('chart')
export class ChartController {
    constructor(private chartService : ChartService) {}

    @Get()
    async getAllChart():Promise<CreateChartDto[]> {
        return await this.chartService.getAllCharts();
    }

}
