const db = require("../../models/db");

const DeleteUser = async (req, res) => {
    const { id } = req.body.data;
    let sql = `delete from users where id =  ${id};`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                result: result,
                message: "falha ao deletar usuario ",
                success: false,
            });
        }

        return res.json({
            result: result,
            message: "usuario deletado com sucesso",
            success: true,
        });
    });
};

module.exports = { DeleteUser };
