const db = require("./db");
const bcrypt = require("bcrypt");

// Checking if the Users Table exists
let sql = "select id from users where id < 40;";

db.query(sql, async (err, result) => {
    const hashedPassword = await bcrypt.hash("12345678", 10);

    if (err) {
        // Creating users Table
        let sql = `CREATE TABLE users (
            id INT NOT NULL PRIMARY KEY auto_increment, 
            username VARCHAR(100) , 
            operator_name VARCHAR(100) , 
            mpesa_agent_code int, 
            emola_agent_code int, 
            agent_phone_number int, 
            operator_phone_number int,
            user_type TEXT, 
            password TEXT
            )`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Users table", err);
            }

            if (result) {
                console.log("Users table Created");

                let sql = `insert into users (username, agent_phone_number, password, user_type) values("Fazbem", 865504448, '${hashedPassword}', "admin");`;

                db.query(sql, (err, result) => {
                    if (err) {
                        console.log("Error adding first admin", err);
                    }

                    if (result) {
                        console.log("First admin added");
                    }
                });
            }
        });
    }
    if (result) console.log("Users table found");
});
