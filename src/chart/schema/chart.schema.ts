import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document } from 'mongoose'

export type chartDocument = chart & Document;

@Schema()
export class chart {
    @Prop()
    userId: string;
    @Prop()
    name : string;
    @Prop()
    password: string;

}

export const ChartSchema = SchemaFactory.createForClass(chart)