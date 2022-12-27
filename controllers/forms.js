const User = require("../models/forms");

const getFormList = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
const createForm = async (req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
const getForm = async (req,res) => {
    try {
        const { id: userID } = req.params;
        const user = await User.findOne({ _id: userID });
        if (!user) {
            return res
            .status(404)
            .json({ msg: `User not available with the user id: ${userID}` });
        }
        res.status(201).json({ user });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
const updateForm = async (req,res) => {
    try {
        const { id: userID } = req.params;
        const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res
            .status(404)
            .json({ msg: `User not available with the user id: ${userID}` });
        }
        res.status(200).json({ user });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
const deleteForm = async (req,res) => {
    try {
        const { id: userID } = req.params;
        const user = await User.findOneAndDelete({ _id: userID });
        if (!user) {
            return res
            .status(404)
            .json({ msg: `User not available with the user id: ${userID}` });
        }
        res.status(200).json({ user });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
module.exports = {
    getFormList,
    createForm,
    getForm,
    updateForm,
    deleteForm
};