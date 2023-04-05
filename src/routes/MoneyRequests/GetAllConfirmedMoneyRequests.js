const router = require("express").Router();
const {
    GetAllConfirmedMoneyRequests,
} = require("../../controllers/MoneyRequests/GetAllConfirmedMoneyRequests");

router.get("/get_all_confirmed_money_requests", GetAllConfirmedMoneyRequests);

module.exports = router;
