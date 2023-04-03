const db = require("../../models/db");

const GetUserInfo = async (req, res) => {
    const { id } = req.body.data;
    let sqlSelect = `select * from users where id = ${id};`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided
        if (result?.length > 0) {
            res.json({
                result: result[0],
                succes: true,
            });
        }

        //if there wasn't found any user with the values provided
        else if (result?.length == 0) {
            res.json({
                message: "Usuario não existe",
                succes: false,
            });
        }
    });
};

module.exports = { GetUserInfo };
