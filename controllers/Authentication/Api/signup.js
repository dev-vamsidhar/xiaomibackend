const Auth = require("../../../models/Authentication/authmodel");
const jwt = require("jsonwebtoken");
function signup(req, res) {
  miid = req.body.miid;
  password = req.body.password;
  username = req.body.username;
  if (miid === undefined) {
    res.status(403).send({ status: "No Email id is provided" });
  } else if (password === undefined) {
    res.status(403).send({ status: "Password is not provided" });
  }
  Auth.findOne({ miid: miid }).then((result) => {
    if (result == null) {
      Auth.create({ miid: miid, password: password, username: username }).then(
        (result) => {
          const token = jwt.sign(
            {
              miid: miid,
            },
            process.env.SCRETKEY
          );
          res
            .status(200)
            .send({ status: "Signup Sucessful", token: token, miid: miid });
        }
      );
    } else {
      res.status(200).send({
        status: "User already exists",
      });
    }
  });
}

module.exports = signup;
