var express = require("express");
const login = require("../controllers/Authentication/Api/login");
const signup = require("../controllers/Authentication/Api/signup");
const tokencheck = require("../controllers/Authentication/tokencheck");
const cart = require("../controllers/Cart/addtocart");
const deletecart = require("../controllers/Cart/deletecartitem");
const getcartitems = require("../controllers/Cart/getcartitems");
const updatestoreprofile = require("../controllers/Authentication/profile/updatestoreprofile");
const getprofile = require("../controllers/Authentication/profile/getprofile");
const createorder = require("../controllers/order/createorder");
const getorders = require("../controllers/order/getorder");

var router = express.Router();

router.post("/app/signup", signup); // user/create
router.post("/app/login", login); // user/l
router.get("/", (req, res) => {
  res.send("website under construction v1.1");
});
router.use(tokencheck);
router.post("/app/addcart", cart); // cart/add
router.post("/app/deletecart", deletecart); // cart/delete
router.post("/app/getcartitems", getcartitems); // cart/get
router.post("/app/updatestoreprofile", updatestoreprofile); // profile/update
router.post("/app/getprofile", getprofile);
//Order
router.post("/app/createorder", createorder);
router.post("/app/getorders", getorders);
module.exports = router;
