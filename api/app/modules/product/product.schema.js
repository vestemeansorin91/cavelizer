const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  voucher: String,
});

const productsCollection = mongoose.model("Product", productSchema);
module.exports = productsCollection;
