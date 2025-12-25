require("dotenv").config(); //to read mongodb url 1st need to required it , dotenv read data from file

const express = require("express");
const mongoose = require("mongoose");//mongooose help to establish connection
const bodyParser = require('body-parser');
const cors = require('cors');

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002; //method in the mongoose for connetion, it this value is not avalaible then use 3002
const uri = process.env.MONGO_URL; 

const app = express(); //create application

app.use(cors());
app.use(bodyParser.json());
//get is route on which we send a data, no parameter is ]
//when we want to send data to backend from user.login credencial we use post route
// app.get('/addHoldings', async(req,res) =>{
// let tempHoldings= [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

// tempHoldings.forEach((item)=>{
//   let newHolding = new HoldingsModel({
//     name:item.name,
//     qty:item.qty,
//     avg:item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//   });
//   newHolding.save();
// });
// res.send("Done");
// });


// app.get('/addPositions', async(req,res) =>{
// let tempPositions= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach((item)=>{
//   let newPosition = new PositionsModel({
//     product:item.product,
//     name:item.name,
//     qty:item.qty,
//     avg:item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//   });
//   newPosition.save();
// });
// res.send("Done");
// });
 
//fetch data from database
app.get('/allHoldings', async(req, res) =>{
   let allHoldings = await HoldingsModel.find({});//read model & fetch info from holding 
    res.json(allHoldings);//we have to retrun it as JSON data that is allholding

});

app.get('/allPositions', async(req, res) =>{
   let allPositions = await PositionsModel.find({});//read model & fetch info from position
    res.json(allPositions);//we have to retrun it as JSON data that is allposition

});

app.post("/newOrder", async (req,res) =>{//this is not a get call it is post call as we want to send data nyojust 
let newOrder = new OrdersModel({// insertion of data when a we btu a stock
   name:req.body.name,
   qty: req.body.qty,
   price: req.body.price,
   mode: req.body.mode,
});

newOrder.save();//save data in db
res.send("Order saved!");
});


app.listen(PORT, ()=>{ //run created application ,set on which port it need to listen, ()=> callback function is passed for what should happen when app will start
   console.log("App Started");
   //mongodb connection code
   mongoose.connect(uri);
   console.log("DB connnected!");
});

