const router = require("express").Router();
const {
    ConfirmComition,
} = require("../../controllers/Comitions/ConfirmComition");

router.post("/confirm_comition", ConfirmComition);

module.exports = router;
