var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CartSchema = new Schema({
  url: {
    type: "String",
  },
  title: {
    type: "String",
  },
  color: {
    type: "String",
  },
  size: {
    type: "String",
  },
  id: {
    type: "String",
  },
  quantity: {
    type: "String",
  },
  price: {
    type: "String",
  },
  homedelivery: {
    type: "String",
  },
  addressline1: {
    type: "String",
  },
  state: {
    type: "String",
  },
  country: {
    type: "String",
  },
  landmark: {
    type: "String",
  },
  pincode: {
    type: "String",
  },
  miid: {
    type: "String",
  },
});

//First argument will be collection name and second argument will the schema name
var CartModel = mongoose.model("cart", CartSchema);
module.exports = CartModel;
