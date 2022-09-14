const Auth = require("../../../models/Authentication/authmodel");
const jwt = require("jsonwebtoken");
function login(req, res) {
  console.log(req.body);
  miid = req.body.miid;
  password = req.body.password;
  if (miid === undefined) {
    res.status(200).send({ status: "No Email id is provided" });
  } else if (password === undefined) {
    res.status(200).send({ status: "Password is not provided" });
  }
  Auth.findOne({ miid: miid }).then((result) => {
    if (!result) {
      res.status(200).send({
        status: "User not found",
      });
      return;
    } else if (result._doc.password === password) {
      const token = jwt.sign(
        {
          miid: miid,
        },
        process.env.SCRETKEY
      );
      res.status(200).send({
        status: "User logged in sucessfully",
        token: token,
        miid: result._doc.miid,
        username: result._doc.username,
      });
    } else {
      res.status(200).send({
        status: "Password error",
      });
    }
  });
}

module.exports = login;
