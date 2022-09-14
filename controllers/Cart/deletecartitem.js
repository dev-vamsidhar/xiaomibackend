const CartModel = require("../../models/core/cartmodel");
async function deletecart(req, res) {
  const id = req.body.id;
  try {
    await CartModel.deleteOne({ id: id });
    res.status(200).send({ status: "Deleted Sucessfully" });
  } catch (error) {
    res.status(200).send({ status: "Created Sucessfully" });
  }
}

module.exports = deletecart;
