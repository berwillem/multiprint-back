const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema({
  titlefr: {
    type: String,
  },
  titleen: {
    type: String,
  },
  titlear: {
    type: String,
  },
});


const Category = mongoose.model("Category", categoryschema);

module.exports = Category;
  