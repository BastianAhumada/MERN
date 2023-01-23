import mongoose from 'mongoose'
import { Schema } from mongoose //Import Schema Method

new Schema({
  nombre: { type: String, required: true },  // Property, { type:, required: empty or not }
  price: { type: Number, required: true},
  category: {type: String, required: true},
  // ingredients: {type: Arra}
})