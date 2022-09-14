const CartModel = require("../../models/core/cartmodel");

async function addcart(req, res) {
  try {
    await CartModel.create(req.body);
    res.status(200).send({ status: "Cart item is added sucessfully" });
  } catch (error) {
    res.status(200).send({
      status: "Something went wrong in our side. We will look it into",
    });
  }
}

module.exports = addcart;
