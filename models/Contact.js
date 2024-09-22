const mongoose = require("mongoose");
const { Schema } = mongoose;
const ContactShema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", ContactShema);

module.exports = Contact;
