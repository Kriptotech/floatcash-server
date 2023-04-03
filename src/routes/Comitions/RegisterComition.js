const router = require("express").Router();
const {
    RegisterComition,
} = require("../../controllers/Comitions/RegisterComition");

router.post("/register_comition", RegisterComition);

module.exports = router;
