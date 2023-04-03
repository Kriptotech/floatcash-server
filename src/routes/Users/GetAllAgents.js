const router = require("express").Router();
const { GetAllAgents } = require("../../controllers/Users/GetAllAgents");

// gets all agents
router.get("/get_all_agents", GetAllAgents);

module.exports = router;
