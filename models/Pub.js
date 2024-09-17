const mongoose = require("mongoose");

const Pubschema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Pub", Pubschema);

module.exports = Product;
