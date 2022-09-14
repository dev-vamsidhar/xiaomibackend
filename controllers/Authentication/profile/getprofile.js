const Auth = require("../../../models/Authentication/authmodel");
async function getprofile(req, res) {
  try {
    const miid = req.body.miid;
    const data = await Auth.find({ miid: miid });
    res.status(200).send({ data: data, status: "Data fetched sucessfully" });
  } catch (error) {
    res.status(200).send({
      status: "Something went wrong from our side. Please try again later",
    });
  }
}

module.exports = getprofile;
