const OrderModel = require("../../models/core/ordermodel");

async function getorders(req, res) {
  const miid = req.body.miid;
  try {
    OrderModel.find({ miid: miid }).then((val) => {
      res.status(200).json({
        data: val,
        miid: miid,
        status: "Orders fetched sucessfully",
      });
    });
  } catch (error) {
    res.status(200).send({
      status: "Something went wrong in our side. We will look it into",
    });
  }
}
module.exports = getorders;
