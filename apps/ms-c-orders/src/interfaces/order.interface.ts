import { Document } from 'mongoose';

export interface Order extends Document {
  readonly customerId: string;
  readonly orderDate: string;
  readonly items: any[];
}
