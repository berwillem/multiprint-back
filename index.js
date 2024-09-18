const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const setupSwagger = require("./config/swagger");

dotenv.config();
const mongoose = require("mongoose");

// using middlewares:
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Remplace par l'URL de ton frontend
  credentials: true
}));


// access log
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
app.use(morgan("dev", { stream: logStream }));

// Initialize Swagger
setupSwagger(app);

// starting server
app.listen(process.env.PORT, () => {
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
