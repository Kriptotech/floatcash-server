const router = require("express").Router();
const { UpdatePassword } = require("../../controllers/Users/UpdatePassword");

router.post("/update_password", UpdatePassword);

module.exports = router;
