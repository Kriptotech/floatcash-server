const router = require("express").Router();
const db = require("../../models/db");

const GetNotifications = async (req, res) => {
    let sql = `select * from notifications;`;

    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.json({
                result: result,
                success: true,
            });
        } else if (result.length == 0) {
            res.json({
                result: result,
                message: "Nenhuma notificação encontrada",
                success: false,
            });
        }
    });
};

// gets all notifications
router.get("/get_notifications", GetNotifications);

module.exports = router;
