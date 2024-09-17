// nom images category desc

const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  titlefr: {
    type: String,
  },
  titleen: {
    type: String,
  },
  titlear: {
    type: String,
  },
  descfr: {
    type: String,
  },
  descen: {
    type: String,
  },
  descar: {
    type: String,
  },
  images: { type: [String], required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productschema);

module.exports = Product;
