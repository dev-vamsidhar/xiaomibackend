const CartModel = require("../../models/core/cartmodel");

async function getcartitems(req, res) {
  try {
    const miid = req.body.miid;
    CartModel.find({ miid: miid }).then((val) => {
      res.status(200).json({
        data: val,
        miid: miid,
        status: "Cart data fetched sucessfully",
      });
    });
  } catch (error) {
    res.status(200).send({
      status: "Something went wrong in our side. We will look it into",
    });
  }
}
module.exports = getcartitems;
