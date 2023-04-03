const router = require("express").Router();
const {
    GetAllUnconfirmedComitions,
} = require("../../controllers/Comitions/GetAllUnconfirmedComitions");

router.get("/get_all_unconfirmed_comitions", GetAllUnconfirmedComitions);

module.exports = router;
