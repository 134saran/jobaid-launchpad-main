const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  type: String, // paid / unpaid
  location: String,
  description: String
});

module.exports = mongoose.model("Job", jobSchema);
