import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { readdirSync } from "fs";
import userRoute from "./src/routes/userRoute";
const morgan = require("morgan");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

//middelware
app.use(morgan("tiny"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

//connect to dataBase
const dbPort = process.env.DBPort;
const mongoUrl = process.env.MongoUrl;
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log(`Mongo is connected in port ${dbPort}`);
    else console.log("Not Connected");
  }
);

app.get("/api/register", (req, res) => {
  res.send("test réussi");
});

userRoute(app);
app.listen(port, () => console.log(`this server turn in port: ${port}`));
//mongod --port 27017 --dbpath C:\TP\25-bookProject\dbBooks --logpath C:\TP\25-bookProject\dbBooks\mongod_27017.log
