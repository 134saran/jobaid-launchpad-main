const router = require("express").Router();
const Job = require("../models/Job");

const isAdmin = (req, res, next) => {
  if (req.headers.adminkey === process.env.ADMIN_KEY) next();
  else res.status(403).json("Access denied");
};

router.post("/", isAdmin, async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.delete("/:id", isAdmin, async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
