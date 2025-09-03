require("dotenv").config();
//After the above line env values goes to the system process
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 8080;
//to get port from aws we write above line
const URL = process.env.MONGO_URL;

const app = express();
mongoose.connect(URL);

app.use(cors());
app.use(bodyParser.json());

//To Load Dumy Data
// app.get("/addPositions", async (req, res) => {
//   let dumyPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   dumyPositions.forEach((item) => {
//     let newPositions = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPositions.save();
//   });
//   res.send("Positions Data Saved Successfully");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrders", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    avg: req.body.avg,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  //we are reading all the data entered by the user and saving it in our database
  res.send("Order Saved");
});

app.listen(PORT, () => {
  console.log("Db_connected");
  console.log(`Server is running on ${PORT}`);
});
