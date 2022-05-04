const petitionModel = require("../models/petition");

module.exports.get = async (id) => {
  return await petitionModel.find({ iduser: id });
};

module.exports.add = async (id, petition, name, firstname, lastname, tel, email, status, classdata, faculty, degreelevel) => {
  const member = new petitionModel({
    iduser: id,
    petition: petition,
    name: name,
    firstname: firstname,
    lastname: lastname,
    tel: tel,
    email: email,
    status: status,
    classdata: classdata,
    faculty: faculty,
    degreelevel: degreelevel,
  });
  return member.save();
};
