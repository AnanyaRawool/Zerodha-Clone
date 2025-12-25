//only data for stock given in the API
const {Schema} = require("mongoose"); //reuire classs scehma from mongoose

const OrdersSchema = new Schema({ 
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});
module.exports = {OrdersSchema};