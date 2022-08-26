const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  available: {
    type: "boolean",
  },
  image: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
