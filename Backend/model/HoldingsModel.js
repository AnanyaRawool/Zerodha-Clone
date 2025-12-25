const {model} = require("mongoose"); 

const {HoldingsSchema} = require('../schemas/HoldingsSchema'); //model ie avaliable 

const HoldingsModel = new model("holding" , HoldingsSchema);

module.exports = {HoldingsModel};

