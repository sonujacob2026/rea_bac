const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Added `required: true`
}, { collection: "list" }); // Ensures MongoDB uses 'list' as the collection name

module.exports = mongoose.model("List", listSchema);
