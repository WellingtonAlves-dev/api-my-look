const conMySql = require("../database/connection");

module.exports = app => {

    app.get("/", (req, res) => {
        res.status(200).json("Bem vindo a api da my-look");
    })

    app.get("/banner", (req, res) => {
        conMySql.connect(err => {
            if(err) throw err;
            con.query("SELECT * FROM mylook_banners_inicial", (err, results, fields) => {
                if(err) throw err;
                console.log(results);
                res.status(200).json(results);
            })
        }) 
    })

}