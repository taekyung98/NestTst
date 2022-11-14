import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ChartService} from "./chart.service";
import {CreateChartDto} from "./dto/create.chart.dto";

@Controller('chart')
export class ChartController {
    constructor(private readonly chartService : ChartService) {}

    //조회
    @Get('/getChart')
    async getAllChart():Promise<string[]> {
        return await this.chartService.getAllCharts();

    }

    @Post()
    async createChart(@Body() chartData: CreateChartDto){
        return await this.chartService.createChart(chartData);
    }


}
