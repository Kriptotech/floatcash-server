const db = require("../../models/db");

const UpdateUser = async (req, res) => {
    const { id, agent_phone_number, username } = req.body.data;

    let sql = `update users set agent_phone_number = "${agent_phone_number}" where id = ${id};`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                message: `Falha ao atualizar celular pessoal`,
                succes: false,
            });
        } else if (result) {
            let sql = `update users set username = "${username}" where id = ${id};`;

            db.query(sql, (err, result) => {
                if (result) {
                    res.json({
                        message: `atualizado`,
                        succes: true,
                        result,
                        req: req.body.data,
                    });
                }
            });
        }
    });
};

module.exports = { UpdateUser };
