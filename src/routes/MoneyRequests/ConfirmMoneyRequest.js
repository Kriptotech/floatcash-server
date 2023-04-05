const router = require("express").Router();
const {
    ConfirmMoneyRequest,
} = require("../../controllers/MoneyRequests/ConfirmMoneyRequest");

router.post("/confirm_money_request", ConfirmMoneyRequest);

module.exports = router;
