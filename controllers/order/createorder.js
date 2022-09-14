const OrderModel = require("../../models/core/ordermodel");

async function createorder(req, res) {
  try {
    await OrderModel.create(req.body);
    res.status(200).send({ status: "Order created sucessfully" });
  } catch (error) {
    res.status(200).send({
      status: "Something went wrong in our side. We will look it into",
    });
  }
}
module.exports = createorder;
