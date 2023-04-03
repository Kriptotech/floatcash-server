const router = require("express").Router();
const { GetUserInfo } = require("../../controllers/Users/GetUserInfo");

// gets single user info
router.post("/single", GetUserInfo);

module.exports = router;
