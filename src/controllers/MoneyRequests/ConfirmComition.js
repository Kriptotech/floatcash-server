const db = require("../../models/db");

const ConfirmComition = async (req, res) => {
    const { id } = req.body.data;

    let sql = `update comitions set is_confirmed = "confirmed" where id = ${id};`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: `Falha ao confirmar comissão`,
                succes: false,
            });
        } else if (result) {
            res.json({
                message: `Comissão Confirmada`,
                succes: true,
                result,
            });
        }
    });
};

module.exports = { ConfirmComition };
