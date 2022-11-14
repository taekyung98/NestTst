import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ChartDocument = Chart & Document;

@Schema()
export class Chart {
    @Prop()
    userId: string;
    @Prop()
    name : string;
    @Prop()
    password: string;

}

export const ChartSchema = SchemaFactory.createForClass(Chart)