const express = require("express");
const router = express.Router();

const {
  getAllStations,
  getInactiveStations,
  createStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");

// GET /api/stations
router.get("/", getAllStations);

// GET /api/stations/inactive/10days
router.get("/inactive/10days", getInactiveStations);
// CREATE
router.post("/", createStation);

// UPDATE
router.put("/:id", updateStation);

// DELETE
router.delete("/:id", deleteStation);

module.exports = router;
