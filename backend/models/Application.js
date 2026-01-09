const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  subject: String,
  qualification: String,
  dob: String,
  jobArea: String,
  resume: String,
  message: String
});

module.exports = mongoose.model("Application", appSchema);
