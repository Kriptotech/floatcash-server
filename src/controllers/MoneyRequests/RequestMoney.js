const db = require("../../models/db");

const RequestMoney = async (req, res) => {
    const { maker, request_value, maker_id, number_to_receive, request_type } =
        req.body.data;

    //if the input values where  provided
    if (
        maker &&
        request_value &&
        maker_id &&
        number_to_receive &&
        request_type
    ) {
        let sqlInsert = `insert into money_requests (maker, request_value, is_confirmed, maker_id, number_to_receive, request_type) values('${maker}', '${request_value}',  'unconfirmed', '${maker_id}','${number_to_receive}','${
            request_type == "money" ? "dinheiro" : "float"
        }');`;

        //inserting a new money_requests into the database
        db.query(sqlInsert, (err, result) => {
            if (result) {
                console.log("new money_request added");
                return res.json({
                    message: `Pedido de ${
                        request_type == "money" ? "dinheiro" : "float"
                    } adicionado`,
                    success: true,
                });
            }
            if (err) {
                res.json({
                    message: `Falha ao adicionar Pedido de  ${
                        request_type == "money" ? "dinheiro" : "float"
                    } `,
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

module.exports = { RequestMoney };