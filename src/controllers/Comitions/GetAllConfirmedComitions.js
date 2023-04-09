const db = require("../../models/db");

const GetAllConfirmedComitions = async (req, res) => {
    let sqlSelect = `select * from comitions where is_confirmed = "confirmed";`;

    db.query(sqlSelect, (err, result) => {
        if (result.length > 0) {
            return res.json({
                result: result,
                success: true,
            });
        } else if (result.length == 0) {
            return res.json({
                result: result,
                message: "Nenhuma comisão encontrada",
                success: false,
            });
        }

        return res.json({
            result: result,
            message: "Nenhuma comisão encontrada",
            success: false,
        });
    });
};

module.exports = { GetAllConfirmedComitions };
