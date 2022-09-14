var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AuthSchema = new Schema({
  username: {
    type: String,
  },
  miid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  storename: {
    type: String,
  },
  storetype: {
    type: String,
  },
  posid: {
    type: String,
  },
});

//First argument will be collection name and second argument will the schema name
var AuthModel = mongoose.model("employees", AuthSchema);
module.exports = AuthModel;
