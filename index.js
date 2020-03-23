const express = require('express');
const consign = require('consign');

const app = express();

const port = 80;

consign().include('./routes').into(app)

app.listen(port, err => {
    if(err) {
        console.log("<Erro!>: " + err);
    }
    else {
        console.log("Service work in: " + port);
    }
})