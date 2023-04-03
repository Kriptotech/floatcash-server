const router = require("express").Router();
const users_router = require("./Users/Index");
const comitions_router = require("./Comitions/Index");
const money_requests_router = require("./MoneyRequests/Index");

router.use("/users", users_router);
router.use("/comitions", comitions_router);
router.use("/money_requests", money_requests_router);
module.exports = router;
