const router = require("express").Router();
const {
    RequestMoney,
} = require("../../controllers/MoneyRequests/RequestMoney");

router.post("/request_money", RequestMoney);

module.exports = router;
