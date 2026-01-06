
const Station = require("../models/Station");

// GET all stations
exports.getAllStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET stations inactive > 10 days
exports.getInactiveStations = async (req, res) => {
  try {
    const date = new Date();
    date.setDate(date.getDate() - 10);

    const stations = await Station.find({
      lastTransactionDate: { $lt: date },
    });

    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// ➕ CREATE station
exports.createStation = async (req, res) => {
  try {
    const station = new Station(req.body);
    await station.save();
    res.status(201).json(station);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// ✏️ UPDATE station
exports.updateStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(station);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ❌ DELETE station
exports.deleteStation = async (req, res) => {
  try {
    await Station.findByIdAndDelete(req.params.id);
    res.json({ message: "Station supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

