const mongoose = require("mongoose");
const stationSchema = new mongoose.Schema(
  {
    code: Number,
    name: String,
    ville: String,
    ipDoms: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["OFFICIELLE", "ORGANIQUE", "COMMISSIONNAIRE"],
    },
    status: {
      type: String,
      enum: ["OK", "KO", "MANUEL"],
      default: "OK",
    },

    lastTransactionDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Station", stationSchema);
