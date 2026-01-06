const express = require("express");
const router = express.Router();

const {
  getAllStations,
  getInactiveStations,
  createStation,
  updateStation,
  deleteStation,
} = require("../controllers/station.controller");
const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");

// GET /api/stations
router.get("/", authMiddleware, getAllStations);

// GET /api/stations/inactive/10days
router.get("/inactive/10days", authMiddleware, getInactiveStations);
// CREATE
router.post("/", isAdmin, authMiddleware, createStation);

// UPDATE
router.put("/:id", isAdmin, authMiddleware, updateStation);

// DELETE
router.delete("/:id", isAdmin, authMiddleware, deleteStation);

module.exports = router;
