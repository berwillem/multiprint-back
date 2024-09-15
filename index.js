const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
dotenv.config();
const mongoose = require("mongoose");
// using middlewares:
app.use(express.json());
app.use(cors());
// access log
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("dev", { stream: logStream }));
// starting server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// connection to db
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));
