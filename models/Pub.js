const mongoose = require("mongoose");

const Pubschema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  titlefr: {
    type: String,
    required: true,
  },
  titlear: {
    type: String,
  },
  titleen: {
    type: String,
  },
  descriptionfr: {
    type: String,
    required: true,
  },
  descriptionar: {
    type: String,
  },
  descriptionen: {
    type: String,
  },
  color: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Pub", Pubschema);

module.exports = Product;
