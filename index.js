const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const setupSwagger = require("./config/swagger");
const coockieParser = require("cookie-parser");

dotenv.config();
const mongoose = require("mongoose");

app.use(coockieParser());
// using middlewares:
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://82.29.169.69:3000",
    ],
    credentials: true,
  })
);

app.use("/images", express.static("assets"));

// access log
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("dev", { stream: logStream }));

// Initialize Swagger
setupSwagger(app);

// starting server
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// routes
app.use("/", require("./routes"));

// connection to db
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));
