const db = require("../../models/db");
const bcrypt = require("bcrypt");

const UpdatePassword = async (req, res) => {
    const { new_password, email } = req.body;
    // console.log(req.body);

    const hashedPassword = await bcrypt.hash(new_password, 10);

    let sql = `select * from users where email = '${email}';`;

    db.query(sql, (err, result) => {
        //if there was found any user with the value provided
        if (result?.length > 0) {
            // console.log(result[0]?.id);
            let sql = `update users set password = '${hashedPassword}' where id = ${result[0]?.id};`;

            db.query(sql, (err, result) => {
                //if ot did update
                if (result?.length > 0) {
                    res.json({
                        message: "Palavra passe atualizada com successo",
                        succes: true,
                    });
                }

                //if there was an error
                else if (err) {
                    console.log(err);
                    res.json({
                        message: "Ocorreu um erro",
                        succes: false,
                    });
                }
                if (typeof result == "object") {
                    res.json({
                        message: "Palavra passe atualizada com successo",
                        succes: true,
                    });
                }
                if (typeof result != "object") {
                    res.json({
                        message: "Ocorreu um erro",
                        succes: false,
                    });
                }
            });
        }

        //if there wasn't found any user with the values provided
        else if (result?.length == 0) {
            res.json({
                message: "Ocorreu um erro",
                succes: false,
            });
        } else if (err) {
            console.log(err);
            res.json({
                message: "Ocorreu um erro",
                succes: false,
            });
        }
    });
};

module.exports = { UpdatePassword };
