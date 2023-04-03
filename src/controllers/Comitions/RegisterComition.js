const db = require("../../models/db");

const RegisterComition = async (req, res) => {
    const { maker, comition_value, maker_id } = req.body.data;

    //if the input values where  provided
    if ((maker && comition_value, maker_id)) {
        let sqlInsert = `insert into comitions (maker, comition_value, is_confirmed, maker_id) values('${maker}', '${comition_value}',  'unconfirmed', '${maker_id}');`;

        //inserting a new comition into the database
        db.query(sqlInsert, (err, result) => {
            if (result) {
                console.log("new commition added");
                return res.json({
                    message: "Comissão adicionada",
                    success: true,
                });
            }
            if (err) {
                res.json({
                    message: "Falha ao adicionar Comissão",
                    success: false,
                });
                console.log(err);
            }
        });
    }
    // if the all the values were not successfuly provided
    else {
        return res.json({ message: "preencha todos campos", success: false });
    }
};

module.exports = { RegisterComition };
