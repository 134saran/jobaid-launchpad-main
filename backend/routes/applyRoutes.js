const router = require("express").Router();
const Application = require("../models/Application");

router.post("/", async (req, res) => {
  const data = await Application.create(req.body);
  res.json(data);
});

module.exports = router;
