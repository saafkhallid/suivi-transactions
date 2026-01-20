const Transaction = require("../models/Transaction");
const Station = require("../models/Station");

// CREATE TRANSACTION
exports.createTransaction = async (req, res) => {
  const { stationCode, amount } = req.body;

  const transaction = await Transaction.create({
    stationCode,
    amount,
  });

  // Update station last transaction date
  await Station.findOneAndUpdate(
    { code: stationCode },
    { lastTransactionDate: new Date() }
  );

  res.status(201).json(transaction);
};

// GET ALL TRANSACTIONS
exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
};
