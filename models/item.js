const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  votes: Number
});

module.exports = mongoose.model("Item", itemSchema);
