const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    // user logged
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findOne(devId);

    if (!targetDev) {
      return res.status(400).json({ error: "This dev does not exist" });
    }

    loggedDev.dislikes.push(targetDev.devId);

    await loggedDev.save();

    return res.json(targetDev);
  }
};
