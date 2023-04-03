const router = require("express").Router();
const {
    GetAllConfirmedComitions,
} = require("../../controllers/Comitions/GetAllConfirmedComitions");

router.get("/get_all_confirmed_comitions", GetAllConfirmedComitions);

module.exports = router;
