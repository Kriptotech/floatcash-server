const router = require("express").Router();
const rquest_money_route = require("./RequestMoney");
// const get_unconfirmed_comitions_route = require("./GetAllUnconfirmedComitions");
// const get_confirmed_comitions_route = require("./GetAllConfirmedComitions");
// const confirm_comitions_route = require("./ConfirmComition");

//  comitions routes
router.use(rquest_money_route);
// router.use(get_unconfirmed_comitions_route);
// router.use(confirm_comitions_route);
// router.use(get_confirmed_comitions_route);

module.exports = router;
