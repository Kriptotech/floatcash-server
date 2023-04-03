const db = require("./db");

// Checking if the comitions Table exists
let sql = "select id from comitions where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating comitions Table
        let sql = `CREATE TABLE comitions (
            id INT NOT NULL AUTO_INCREMENT,
            maker TEXT,
            maker_id TEXT,
            is_confirmed TEXT,
            comition_value TEXT,
            PRIMARY KEY (id));`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating comitions table", err);
            }

            if (result) {
                console.log("comitions table Created");
            }
        });
    }
    if (result) console.log("comitions table found");
});
