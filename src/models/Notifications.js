const db = require("./db");

// Checking if the Notifications Table exists
let sql = "select id from notifications where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating Notifications Table
        let sql = `CREATE TABLE notifications (
            id INT NOT NULL AUTO_INCREMENT,
            maker_id TEXT,
            maker TEXT,
            title TEXT,
            body TEXT,
            type TEXT,
            PRIMARY KEY (id));`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Notifications table", err);
            }

            if (result) {
                console.log("Notifications table Created");
            }
        });
    }
    if (result) console.log("Notifications table found");
});
