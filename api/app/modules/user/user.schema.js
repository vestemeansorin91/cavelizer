const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  isActive: {
    type: Boolean,
  },
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;
