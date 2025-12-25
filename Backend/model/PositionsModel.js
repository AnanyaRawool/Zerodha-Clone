const {model} = require("mongoose"); 

const {PositionsSchema} = require('../schemas/PositionsSchema'); //model ie avaliable 

const  PositionsModel = new model("Position" , PositionsSchema);

module.exports = {PositionsModel};