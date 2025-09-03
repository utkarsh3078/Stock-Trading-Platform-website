const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

//in below line we are deciding name of our new collection
//MongoDb will make it holdings, as it adds a s in ending of the name automatically
const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
