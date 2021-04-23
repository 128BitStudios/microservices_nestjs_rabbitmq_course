import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
  items: Array, // [{stockId: "guid", qty: 5, name: "Jaffa Cake"}]
  address: String,
  deliveryDate: Date,
  delivered: Boolean,
});
