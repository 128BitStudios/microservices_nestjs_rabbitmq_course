import * as mongoose from 'mongoose';

export const StockSchema = new mongoose.Schema({
  stockId: String,
  quantity: Number,
  name: String,
});
