import { Document } from 'mongoose';

export interface Delivery extends Document {
  readonly items: any[];
  readonly address: string;
  readonly deliveryDate: string;
  readonly delivered: boolean;
}
