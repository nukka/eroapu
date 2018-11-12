var mysql = require('mysql');
var express = require('express');
var application = express();

var cors = require('cors');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "eroapua",
    database: "mysql"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM mysql.test", function (err, result) {
        if (err) throw err;
        console.log("test results: " + result);
    });
});

application.use(cors());

application.get('/test', function (req, res) {
    con.query('SELECT * FROM mysql.harkitsen_eroa', function (error, results) {
        if (error) throw error;

        console.log("/test results: ");

        res.send(results)
    });
});

application.listen(3001, () => {
    console.log('Go to http://localhost:3001/test');
});