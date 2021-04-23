import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  customerId: String,
  orderDate: Date,
  items: Array, // [{stockId: "guid", qty: 5, name: "Jaffa Cake"}]
});
