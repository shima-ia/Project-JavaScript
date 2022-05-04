const { add, get } = require("../services/petition");

module.exports.get = async (req, res) => {
  let session = req.session;
  res.status(200).json(await get(session.userId));
};

module.exports.add = async (req, res) => {
  const body = req.body;
  let session = req.session;
  try {
    await add(
      session.userId,
      body.petition,
      body.name,
      body.firstname,
      body.lastname,
      body.tel,
      body.email,
      body.status,
      body.classdata,
      body.faculty,
      body.degreelevel
    );
    res.status(201).json({
      status: true,
    });
  } catch {
    res.status(500).json({
      status: false,
    });
  }
};
