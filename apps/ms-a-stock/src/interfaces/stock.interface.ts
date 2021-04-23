import { Document } from 'mongoose';

export interface Stock extends Document {
  readonly stockId: string;
  readonly quantity: number;
  readonly name: string;
}
