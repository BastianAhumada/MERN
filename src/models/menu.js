import mongoose from 'mongoose';
const { Schema } = mongoose; //Import Schema Method

const MenuSchema = new Schema({
  name: { type: String, required: true },  // Property, { type:, required: empty or not }
  price: { type: Number, required: true},
  category: {type: String, required: true},
  // ingredients: {type: Arra}
})

export default mongoose.model('MenuSchema', MenuSchema) // Create Model MongoDB
