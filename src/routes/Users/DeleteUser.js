const router = require("express").Router();
const { DeleteUser } = require("../../controllers/Users/DeleteUser");

// delete user
router.post("/delete", DeleteUser);

module.exports = router;
