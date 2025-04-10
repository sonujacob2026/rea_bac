const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: { type: String, required: true }
}, { collection: "list" });

module.exports = mongoose.model("List", listSchema);
