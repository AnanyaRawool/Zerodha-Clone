//only data for stock given in the API
const {Schema} = require("mongoose"); //reuire classs scehma from mongoose

const PositionsSchema = new Schema({ 
    product: String,
    name: String,
    qty: Number,
    avg:Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});
module.exports = {PositionsSchema};