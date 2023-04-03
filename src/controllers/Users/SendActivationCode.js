const db = require("../../models/db");
const nodemailer = require("nodemailer");

const SendActivationCode = async (req, res) => {
    const { email } = req.body;
    // console.log(req.body);

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "einsrocket00@gmail.com",
            pass: "ljwmmtlcguzxujhw",
            // pass: process.env.smtp_gmail,
        },
    });

    let sqlSelect = `select * from users where email = '${email}';`;

    db.query(sqlSelect, (err, result) => {
        console.log(result[0]?.activation_code);
        //if there was found any user with the value provided
        if (result?.length > 0) {
            //#region
            let html_code = `<!DOCTYPE html>
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <!-- fonst -->
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <!-- fonst -->
                    <title>Codigo de recuperação de senha</title>
                    <style>
                        * {
                            padding: 0;
                            margin: 0;
                            box-sizing: border-box;
                        }
                        body {
                            background-color: rgb(18, 18, 20);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            color: rgb(237, 242, 247);
                            padding: 0 5%;
                            font-family: "Roboto", Arial, Helvetica, sans-serif;
                        }
            
                        .container {
                            width: min(450px, 100%);
                            min-height: 100px;
                            background-color: rgb(32, 32, 36);
                            padding: 15px;
                            border-radius: 10px;
                            color: rgb(237, 242, 247);
                        }
            
                        .container img {
                            width: min(300px, 90%);
                            margin-left: 50%;
                            transform: translateX(-50%);
                        }
            
                        p {
                            line-height: 30px;
                            text-align: justify;
                            margin-bottom: 15px;
                            color: rgb(237, 242, 247);
                        }
                        strong {
                            margin-bottom: 15px;
                            color: rgb(237, 242, 247);
                        }
                        ul {
                            padding-left: 10%;
                            margin-top: 10px;
                            color: rgb(237, 242, 247);
                        }
                        li {
                            margin-bottom: 10px;
                            color: rgb(237, 242, 247);
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <img
                            src="https://einsrocket.netlify.app/assets/images/astronauts.svg"
                            alt=""
                        />
            
                        <p>
                            Olá ${result[0]?.username}, agradecemos por embarcar nessa jornada.
                        </p>
                        <p>
                            Notamos que voce esqueceu a sua senha, não se preocupe, nós vamos
                            te ajudar!
                        </p>
                        <p>O seu codigo de recuperação de senha é: ${result[0]?.activation_code}</p>
                        <strong>Para recuperar siga os passos abaixo:</strong>
                        <ul>
                            <li>
                                entre em
                                <a
                                    href="https://einsrocket.netlify.app/reset_password"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >einsrocket.netlify.app/reset_passsword</a
                                >
                            </li>
                            <li>
                                Após inserir os seu dados, insira este codigo: ${result[0]?.activation_code}, para
                                poder criar uma nova palavra passe.
                            </li>
                        </ul>
                    </div>
                </body>
            </html>`;
            ////#endregion
            transport
                .sendMail({
                    from: "Einsrocket <einsrocket00@gmail.com>",
                    to: email,
                    subject: "Codigo de recuperação de senha",
                    html: html_code,
                    text: `Ola ${result[0]?.username}, agradecemos por embarcar nessa jorna. Notamos que voce esqueceu a sua senha, não se preocupe, nós vamos
                    te ajudar!. O seu codigo de recuperação de senha é: ${result[0]?.activation_code}`,
                })
                .then(() => {
                    res.json({
                        message: `enviamos um email para ${result[0]?.email} com o codigo de recuperação de senha`,
                        result,
                        succes: true,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.json({
                        message: `Ocorreu um erro enviando o email`,
                        result,
                        succes: false,
                    });
                });
        }

        //if there wasn't found any user with the values provided
        else if (result?.length == 0) {
            res.json({
                message: "Usuario não existe",
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

module.exports = { SendActivationCode };
