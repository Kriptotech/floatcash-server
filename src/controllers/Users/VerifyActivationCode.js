const db = require("../../models/db");

const VerifyActivationCode = async (req, res) => {
    const { activation_code, email } = req.body;
    // console.log(req.body);

    let sqlSelect = `select * from users where activation_code = ${Number(
        activation_code
    )} and email = '${email}';`;

    db.query(sqlSelect, (err, result) => {
        // console.log(result);
        //if there was found any user with the value provided
        if (result?.length > 0) {
            res.json({
                message: "Codigo de ativação valido",
                result,
                succes: true,
            });
        }

        //if there wasn't found any user with the values provided
        else if (result?.length == 0) {
            res.json({
                message: "Dados invalidos",
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

module.exports = { VerifyActivationCode };
