const bcrypt = require("bcrypt");
const db = require("../../models/db");
const JWT = require("jsonwebtoken");

const secret = "well, well, that is a secret I guess";

// handle user registation
const RegisterAgentSupervisor = async (req, res) => {
    const {
        username,
        password,
        agent_phone_number,
        operator_name,
        mpesa_agent_code,
        emola_agent_code,
        operator_phone_number,
    } = req.body.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    //if the input values where  provided
    if (username && password && agent_phone_number) {
        let sqlSelect = `select * from users where agent_phone_number = ${agent_phone_number};`;

        db.query(sqlSelect, (err, result) => {
            if (err) return console.log(err);

            //if there already is a user with a similar agent_phone_number
            if (result.length > 0)
                return res.json({
                    message: `Numero de celular indisponivel.`,
                    success: false,
                });

            if (result.length == 0) {
                let sqlSelect = `select * from users where Password = '${hashedPassword}';`;

                //if there are agents with a similar password
                db.query(sqlSelect, (err, result) => {
                    if (err) return console.log(err);
                    //if there is a agent with a similar password
                    else if (result.length > 0)
                        return res.json({
                            message: `Escolha outra palavra passe`,
                            success: false,
                        });
                    //if there are no agents with a similar password
                    else if (result.length == 0) {
                        let sqlInsert = `insert into users (agent_phone_number, password, username, 
                            operator_name, mpesa_agent_code, emola_agent_code, operator_phone_number, user_type) values(${agent_phone_number}, '${hashedPassword}', '${username}', '${operator_name}', ${mpesa_agent_code}, ${emola_agent_code}, ${operator_phone_number}, 'supervisor');`;

                        //inserting a new agent into the database
                        db.query(sqlInsert, (err, result) => {
                            if (result) {
                                console.log("new user added");
                                return res.json({
                                    message: "Supervisor de agentes adicionado",
                                    success: true,
                                });
                            }
                            if (err) {
                                res.json({
                                    message:
                                        "Falha ao adicionar Supervisor de agentes",
                                    success: false,
                                });
                                console.log(err);
                            }
                        });
                    }
                });
            }
        });
    }
    // if the all the values were not successfuly provided
    else {
        return res.json({ message: "preencha todos campos", success: false });
    }
};

module.exports = { RegisterAgentSupervisor };
