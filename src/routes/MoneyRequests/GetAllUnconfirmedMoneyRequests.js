const router = require("express").Router();
const {
    GetAllUnconfirmedMoneyRequests,
} = require("../../controllers/MoneyRequests/GetAllUnconfirmedMoneyRequests");

router.get(
    "/get_all_unconfirmed_money_requests",
    GetAllUnconfirmedMoneyRequests
);

module.exports = router;
