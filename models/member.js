const mongoose = require('mongoose');
const { Schema } = mongoose;

const memberSchema = new Schema({
  username:  String,
  password: String,
  email: String,
  fullname: String,
});

module.exports =  mongoose.model('tb_members', memberSchema);