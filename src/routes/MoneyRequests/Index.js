const router = require("express").Router();
const rquest_money_route = require("./RequestMoney");
const get_unconfirmed_money_requests_route = require("./GetAllUnconfirmedMoneyRequests");
const get_confirmed_money_requests_route = require("./GetAllConfirmedMoneyRequests");
const confirm_money_request_route = require("./ConfirmMoneyRequest");

router.use(rquest_money_route);
router.use(get_unconfirmed_money_requests_route);
router.use(confirm_money_request_route);
router.use(get_confirmed_money_requests_route);

module.exports = router;
