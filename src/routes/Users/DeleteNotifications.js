const router = require("express").Router();
const db = require("../../models/db");

const DeleteNotifications = async (req, res) => {
    let sql = `delete from notifications;`;

    db.query(sql, (err, result) => {
        console.log("notifications deleted");
    });
};

router.get("/delete_notifications", DeleteNotifications);

module.exports = router;
