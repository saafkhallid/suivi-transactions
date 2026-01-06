
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connexion DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// ROUTES ✅ (تعريف قبل الاستعمال)
const stationRoutes = require("./routes/station.routes");
// const transactionRoutes = require("./routes/transaction.routes");

// Utilisation des routes
app.use("/api/stations", stationRoutes);
// app.use("/api/transactions", transactionRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
