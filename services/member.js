
const memberModel = require('../models/member');

module.exports.login = async (username, password) => {
    return await memberModel.findOne({username: username, password: password});
}

module.exports.add = async (email, username, password, fullname) => {
    const member = new memberModel({
        email: email,
        username: username,
        password: password,
        fullname: fullname
    });
    return member.save();
}
module.exports.edit = async (id,email, username, password, fullname) => {
    return await memberModel.updateOne({_id: id},{
        $set: {
            email: email,
            username: username,
            password: password,
            fullname: fullname
        }
    });
}