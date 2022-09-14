const Auth = require("../../../models/Authentication/authmodel");
async function updatestoreprofile(req, res) {
  try {
    const miid = req.body.miid;
    console.log(req.body);
    var val = await Auth.findOneAndUpdate({ miid: miid }, req.body);
    console.log(val);
    res.status(200).send({ status: "Profile is updated" });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      status: "Something went wrong from our side. Please try again later",
    });
  }
}

module.exports = updatestoreprofile;
