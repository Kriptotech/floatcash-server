const router = require("express").Router();
const { addUser } = require("../../controllers/Users/RegisterAgent");

// handle user registation
router.post("/register_agent", addUser);

module.exports = router;
