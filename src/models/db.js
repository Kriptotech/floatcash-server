const database_config = require("../config/dbConfig");
const mysql = require("mysql2");

const db = mysql.createConnection(database_config);

db.connect((err, result) => {
    if (err) console.log(err);
    if (result) console.log("Db connnected Succesfuly");
});

module.exports = db;

require("./Users");
require("./Comitions");
require("./CheckMobileVersion");
require("./MoneyRequests");
require("./Notifications");
