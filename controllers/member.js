const { login, add, edit } = require("../services/member");

module.exports.login = async (req, res) => {
    const body = req.body;
    try {
        const data = await login(body.username, body.password);
        if (data) {
            let session = req.session;
            session.userId = data._id
            res.status(200).json({
                status: true,
                data: data,
            })
        } else {
            res.status(200).json({
                status: false,
                data: data,
            })
        }
    } catch {
        res.status(500).json({
            status: false
        })
    }
}

module.exports.register = async (req, res) => {
    const body = req.body;
    try {
        await add(body.email, body.username, body.password, body.fullname);
        res.status(201).json({
            status: true,
        })
    } catch {
        res.status(500).json({
            status: false
        })
    }
}
module.exports.edit = async (req, res) => {
    const body = req.body;
    const id = req.params.id
    try {
        await edit(id,body.email, body.username, body.password, body.fullname);
        res.status(200).json({
            status: true,
        })
    } catch {
        res.status(500).json({
            status: false
        })
    }
}