const db = require("./db");

// Checking if the check_mobile_version Table exists
let sql = "select id from check_mobile_version where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating check_mobile_version Table
        let sql = `CREATE TABLE check_mobile_version (
            id INT NOT NULL AUTO_INCREMENT,
            current_version TEXT,
            download_link TEXT,
            PRIMARY KEY (id));`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating check_mobile_version table", err);
            }

            if (result) {
                console.log("check_mobile_version table Created");

                let sql = `insert into check_mobile_version (current_version) values("1.0.0");`;

                db.query(sql, (err, result) => {
                    if (err) {
                        console.log("Error adding first mobile version", err);
                    }

                    if (result) {
                        console.log("First mobile version added");
                    }
                });
            }
        });
    }
    if (result) console.log("check_mobile_version table found");
});
