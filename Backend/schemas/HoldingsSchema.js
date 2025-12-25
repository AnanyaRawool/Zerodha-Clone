//only data for stock given in the API
const {Schema} = require("mongoose"); //reuire classs scehma from mongoose

const HoldingsSchema = new Schema({ 
    name: String,
    qty: Number,
    avg:Number,
    price: Number,
    net: String,
    day: String,
});
module.exports = {HoldingsSchema};