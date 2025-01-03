const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is missing"],
    trim: true,
    maxlength: [35, "user name cannot be more than 35 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is missing"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is missing"],
    trim: true,
    minlength: [8, "password cannot be less than 8 characters"],
  },
});

module.exports = mongoose.model("User", UserSchema);
