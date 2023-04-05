const router = require("express").Router();
const register_agent_route = require("./RegisterAgent");
const login_route = require("./Login");
const get_single_user_info_route = require("./GetUserInfo");
const getall_agents_route = require("./GetAllAgents");
const update_userinfo_route = require("./UpdateInfo");
const delete_user_route = require("./DeleteUser");
const register_agent_supervisor_route = require("./RegisterAgentSupervisor");

const update_password_route = require("./UpdatePassword");
const verify_activation_code_route = require("./VerifyActivationCode");
const send_activation_code_route = require("./SendActivationCode");

//  user routes
router.use(register_agent_route);
router.use(register_agent_supervisor_route);
router.use(login_route);
router.use(get_single_user_info_route);
router.use(getall_agents_route);
router.use(update_userinfo_route);
router.use(delete_user_route);

router.use(verify_activation_code_route);
router.use(update_password_route);
router.use(send_activation_code_route);

module.exports = router;
