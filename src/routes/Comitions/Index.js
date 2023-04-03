const router = require("express").Router();
const register_comition_route = require("./RegisterComition");
const get_unconfirmed_comitions_route = require("./GetAllUnconfirmedComitions");
const get_confirmed_comitions_route = require("./GetAllConfirmedComitions");
const confirm_comitions_route = require("./ConfirmComition");

//  comitions routes
router.use(register_comition_route);
router.use(get_unconfirmed_comitions_route);
router.use(confirm_comitions_route);
router.use(get_confirmed_comitions_route);

module.exports = router;
