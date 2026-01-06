
const cron = require("node-cron");
const Station = require("../models/Station");

cron.schedule("0 8 * * *", async () => {
  const date = new Date();
  date.setDate(date.getDate() - 10);

  const inactive = await Station.find({
    lastTransactionDate: { $lt: date },
  });

  console.log("Stations inactive > 10 days:", inactive.length);
});
