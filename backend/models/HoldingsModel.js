const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

//in below line we are deciding name of our new collection
//MongoDb will make it holdings, as it adds a s in ending of the name automatically
const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
