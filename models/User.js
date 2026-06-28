const mongoose = require("mongoose");

// This defines how user data will look in the database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;