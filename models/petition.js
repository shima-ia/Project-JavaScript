const mongoose = require('mongoose');
const { Schema } = mongoose;

const petitionSchema = new Schema({
  iduser: String,
  petition: String,
  name: String,
  firstname: String,
  lastname: String,
  tel: String,
  email: String,
  status: String,
  classdata: String,
  faculty: String,
  degreelevel: String,
});

module.exports = mongoose.model("tb_petitions", petitionSchema);
