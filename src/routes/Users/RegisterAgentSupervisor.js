const router = require("express").Router();
const {
    RegisterAgentSupervisor,
} = require("../../controllers/Users/RegisterAgentSupervisor");

// handle user registation
router.post("/register_agent_supervisor", RegisterAgentSupervisor);

module.exports = router;
