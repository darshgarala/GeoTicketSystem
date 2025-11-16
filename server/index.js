const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(express.json());

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
