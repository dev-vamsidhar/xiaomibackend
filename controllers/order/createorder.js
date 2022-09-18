const OrderModel = require("../../models/core/ordermodel");
const axios = require("axios");
async function createorder(req, res) {
  try {
    await OrderModel.create(req.body);
    let config = {
      headers: {
        "api-key":
          "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",
        "content-type": "application/json",
      },
    };
    axios
      .post(
        "https://api.sendinblue.com/v3/smtp/email",
        {
          sender: {
            name: "Xiaomi",
            email: "vamsubala1@gmail.com",
          },
          to: [
            {
              email: req.body.email,
              name: req.body.name,
            },
          ],
          subject: "Order Confirmation",
          htmlContent:
            "<html><head></head><body><p>Thanks for ordering,</p>Your order is confirmed. Soon we will share the tracking details once it is shipped </p></body></html>",
        },
        config
      )
      .then(function (response) {
        console.log(response.data);
      });
    res.status(200).send({ status: "Order created sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      status: "Something went wrong in our side. We will look it into",
    });
  }
}
module.exports = createorder;
