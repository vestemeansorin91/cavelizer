const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  age: {
    type: Number,
    defaul: 18,
  },
});

const usersCollection = mongoose.model("User", userSchema);
module.exports = usersCollection;
