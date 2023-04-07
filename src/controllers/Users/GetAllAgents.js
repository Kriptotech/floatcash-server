const db = require("../../models/db");

const GetAllAgents = async (req, res) => {
    let sqlSelect = `select * from users where user_type = "agent";`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any agent with the value provided 3
        if (result.length > 0) {
            res.json({
                result: result,
                success: true,
            });
        }

        //if there wasn't found any agent with the values provided 5
        else if (result.length == 0) {
            res.json({
                result: result,
                message: "Nenhum agente encontrado",
                success: false,
            });
        }
    });
};

module.exports = { GetAllAgents };
