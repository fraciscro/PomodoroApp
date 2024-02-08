const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoModel = new Schema({
  name: { type: String },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model("Todo", todoModel);
