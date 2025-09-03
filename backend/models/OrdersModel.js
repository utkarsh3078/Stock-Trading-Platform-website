const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

//in below line we are deciding name of our new collection
//MongoDb will make it holdings, as it adds a s in ending of the name automatically
const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };
