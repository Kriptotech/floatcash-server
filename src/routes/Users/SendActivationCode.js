const router = require("express").Router();
const {
    SendActivationCode,
} = require("../../controllers/Users/SendActivationCode");

router.post("/send_activation_code", SendActivationCode);

module.exports = router;
