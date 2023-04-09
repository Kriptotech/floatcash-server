const db = require("../../models/db");

const RegisterComition = async (req, res) => {
    const { maker, comition_value, request_from, request_format, maker_id } =
        req.body.data;

    //if the input values where  provided
    if ((maker && comition_value, maker_id)) {
        let sql = `insert into comitions (maker, comition_value, is_confirmed, maker_id, request_from, request_format) values('${maker}', '${comition_value}',  'unconfirmed', '${maker_id}', '${request_from}', '${request_format}');`;

        //inserting a new comition into the database
        db.query(sql, (err, result) => {
            if (result) {
                console.log("new commition added");

                let sql = `insert into notifications (maker, maker_id, title, body, type) values('${maker}', '${maker_id}', 'Nova comissão', '${maker} registrou uma nova comissão', 'comition');`;

                //inserting a new notification into the database
                db.query(sql, (err, result) => {
                    if (result) {
                        console.log("new commition notification  added");

                        return res.json({
                            message: "Comissão adicionada",
                            success: true,
                        });
                    }
                    if (err) {
                        console.log(err);
                        return res.json({
                            message: "Falha ao adicionar Comissão",
                            success: false,
                        });
                    }
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
