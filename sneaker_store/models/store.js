const mongoose = require('mongoose')

const sneakerSchema = new mongoose.Schema({
  img : String,
  brand: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  price: Number,
  size: Number,
  addToCart: Boolean
})

const Sneaker = mongoose.model('Sneaker', sneakerSchema)

module.exports = Sneaker