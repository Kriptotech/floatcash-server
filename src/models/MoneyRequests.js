const db = require("./db");

// Checking if the money_requests Table exists
let sql = "select id from money_requests where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating money_requests Table
        let sql = `CREATE TABLE money_requests (
            id INT NOT NULL AUTO_INCREMENT,
            maker TEXT,
            maker_id TEXT,
            is_confirmed TEXT,
            request_value TEXT,
            number_to_receive TEXT,
            request_type TEXT,
            PRIMARY KEY (id));`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating money_requests table", err);
            }

            if (result) {
                console.log("money_requests table Created");
            }
        });
    }
    if (result) console.log("money_requests table found");
});
