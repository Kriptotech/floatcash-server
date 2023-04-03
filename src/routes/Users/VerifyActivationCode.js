const router = require("express").Router();
const {
    VerifyActivationCode,
} = require("../../controllers/Users/VerifyActivationCode");

router.post("/verify_activation_code", VerifyActivationCode);

module.exports = router;
