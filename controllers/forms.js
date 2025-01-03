const User = require("../models/forms");

const getFormList = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const createForm = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getForm = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ msg: `User not available with the email id: ${email}` });
    } else {
      const { password } = req.body;
      //console.log(password, user.password);
      if (user.password !== password) {
        return res.status(404).json({ msg: `password is incorrect` });
      }
      res.status(201).json({ user });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getFormList,
  createForm,
  getForm,
};
