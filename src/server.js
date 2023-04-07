// modules
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// externals modules
const db = require("./models/db");
const server_routes = require("./routes/Index");

//middlewares and the router
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(server_routes);

app.get("/", async (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

app.get("/check_current_mobile_version", async (req, res) => {
    let sql = `select * from check_mobile_version;`;

    db.query(sql, (err, result) => {
        //if there was found anything with the value provided
        if (result) {
            res.json({
                result: result[0],
                succes: true,
            });
        }
        //if there wasn't found anything with the values provided
        else if (!result) {
            res.json({
                result: result[0],
                message: "A pesquisa não deu resultado",
                succes: false,
            });
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("server is running on port " + PORT));
