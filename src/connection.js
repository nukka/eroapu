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

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM mysql.harkitsen_eroa", function (err, result) {
        if (err) throw err;
    });
});

application.use(cors());

application.get('/api/aikajana', function (req, res) {


    con.query('CREATE TABLE IF NOT EXISTS aikajana (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('TRUNCATE TABLE aikajana', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/harkitsen.csv\' INTO TABLE aikajana FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (title, link, source);', function (error, results) {
        if (error) throw error;
    });

    con.query('SELECT * FROM mysql.aikajana;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});

application.listen(3001, () => {
    console.log('Go to http://localhost:3001/api/aikajana');
});