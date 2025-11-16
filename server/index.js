const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api", apiRoutes);

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "GeoSystem",
  });
  console.log("DB Connected");
}

connectDB().catch((e) => {
  console.log("error in DB connection");
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
