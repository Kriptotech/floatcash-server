const db = require("../../models/db");

const ConfirmMoneyRequest = async (req, res) => {
    const { id } = req.body.data;

    let sql = `update money_requests set is_confirmed = "confirmed" where id = ${id};`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: `Falha ao confirmar requisição de dinheiro/float`,
                succes: false,
            });
        } else if (result) {
            res.json({
                message: `Requisição de dinheiro/float Confirmada`,
                succes: true,
                result,
            });
        }
    });
};

module.exports = { ConfirmMoneyRequest };
