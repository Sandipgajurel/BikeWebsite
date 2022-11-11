const mongoose =  require("mongoose");
const schema = mongoose.Schema;

const BikeDetailsSchema = new schema ({
name: String,
cc: Number,
type: String,
price:Number,
weight:Number,
image:String,
features:String,
createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BikeDetails", BikeDetailsSchema)
