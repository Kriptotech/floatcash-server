const bcrypt = require("bcrypt");
const db = require("../../models/db");
const JWT = require("jsonwebtoken");

var hashedPassword = null;
const secret = "well, well, that is a secret I guess";

const LoginUser = async (req, res) => {
    const { password, agent_phone_number } = req.body.data;
    const token = await JWT.sign({ password }, secret, {
        expiresIn: 1209600,
    });

    // compares Password with hashedPassword 4
    const compareHash = async (password, userPassword, userData) => {
        let isMatch = await bcrypt.compare(password, userPassword);

        if (!isMatch) {
            res.json({ message: "Palavra Passe errada", success: false });
        }
        if (isMatch) {
            res.json({ message: "Logado", userData, token, success: true });
        }
    };

    //if the input values where  provided 2
    let sqlSelect = `select * from users where agent_phone_number = ${agent_phone_number};`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided 3
        if (result.length > 0) {
            compareHash(password, result[0].password, result[0]);
        }

        //if there wasn't found any user with the values provided 5
        else if (result.length == 0) {
            res.json({
                message: "Usuario não existe",
                success: false,
            });
        }
    });
};

module.exports = { LoginUser };
