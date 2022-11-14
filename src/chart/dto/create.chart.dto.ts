import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateChartDto{
    @IsString()
    _id? : string;

    @IsString()
    readonly userId : string;

    @IsString()
    readonly name : string;

    @IsString()
    readonly password? : string;

}