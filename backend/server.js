const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/apply", require("./routes/applyRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
