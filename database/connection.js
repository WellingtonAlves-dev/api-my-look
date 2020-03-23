const mysql = require("mysql");

let con = mysql.createConnection({
    host: "localhost",
    user: "mylook_base",
    password: ""
  });

exports.module = con;