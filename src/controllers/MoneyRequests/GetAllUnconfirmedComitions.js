const db = require("../../models/db");

const GetAllUnconfirmedComitions = async (req, res) => {
    let sqlSelect = `select * from comitions where is_confirmed = "unconfirmed";`;

    db.query(sqlSelect, (err, result) => {
        if (result.length > 0) {
            res.json({
                result: result,
                success: true,
            });
        } else if (result.length == 0) {
            res.json({
                result: result,
                message: "Nenhuma comisão encontrada",
                success: false,
            });
        }
    });
};

module.exports = { GetAllUnconfirmedComitions };
