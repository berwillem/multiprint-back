const mongoose = require("mongoose");

const generalschema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }
});

const General = mongoose.model("General", generalschema);

module.exports = General;