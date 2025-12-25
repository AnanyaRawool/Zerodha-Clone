const {model} = require("mongoose"); 

const {OrdersSchema} = require('../schemas/OrderSchema'); //model ie avaliable 

const  OrdersModel = new model("Order" , OrdersSchema);

module.exports = {OrdersModel};
