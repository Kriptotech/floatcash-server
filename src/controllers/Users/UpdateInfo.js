const db = require("../../models/db");

const UpdateUser = async (req, res) => {
    const { id, agent_phone_number, username } = req.body.data;

    let sqlSelect = `select * from users where agent_phone_number = ${Number(
        agent_phone_number
    )};`;

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                message: `Falha ao atualizar dados pessoais`,
                success: false,
            });
        }

        //if there already is a user with a similar agent_phone_number
        if (result.length > 0)
            return res.json({
                message: `Voce ou outra pessoa esta usando este numero. Acção invalida!`,
                success: false,
            });

        if (result.length == 0) {
            let sql = `update users set agent_phone_number = "${agent_phone_number}" where id = ${id};`;

            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.json({
                        message: `Falha ao atualizar celular pessoal`,
                        success: false,
                    });
                } else if (result) {
                    let sql = `update users set username = "${username}" where id = ${id};`;

                    db.query(sql, (err, result) => {
                        if (err) {
                            console.log(err);
                            return res.json({
                                message: `Falha ao atualizar dados pessoais`,
                                success: false,
                            });
                        }
                        if (result) {
                            return res.json({
                                message: `atualizado`,
                                success: true,
                                result,
                                req: req.body.data,
                            });
                        }
                    });
                }
            });
        }
    });
};

module.exports = { UpdateUser };
