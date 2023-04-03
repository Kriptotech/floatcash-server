const router = require("express").Router();
const { LoginUser } = require("../../controllers/Users/Login");

// handle user registation
router.post("/login", LoginUser);

// "data": {
//     "agent_phone_number": 864660991,
//     "password": "12345678"
//   }

module.exports = router;
