const Station = require("../models/Station");
const checkStations = async () => {
  const date = new Date();
  date.setDate(date.getDate() - 10);

  const stations = await Station.find({
    lastTransactionDate: { $lt: date },
  });

  stations.forEach((station) => {
    console.log(
      `⚠️ Station inactive +10 jours : ${station.name} (${station.code})`
    );
  });
};

module.exports = checkStations;

