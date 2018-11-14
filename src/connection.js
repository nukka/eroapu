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

application.use(cors());

application.get('/api/aikajana/harkitsen_eroa', function (req, res) {


    con.query('CREATE TABLE IF NOT EXISTS harkitsen (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), phase VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('TRUNCATE TABLE harkitsen', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/harkitsen.csv\' INTO TABLE harkitsen FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (title, link, source, phase)', function (error, results) {
        if (error) throw error;
    });


    con.query('SELECT * FROM mysql.harkitsen;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});

application.get('/api/aikajana/olen_eronnut', function (req, res) {


    con.query('CREATE TABLE IF NOT EXISTS eronnut (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), phase VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('TRUNCATE TABLE eronnut', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/olen_eronnut.csv\' INTO TABLE eronnut FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, phase);', function (error, results) {
        if (error) throw error;
    });

    con.query('SELECT * FROM mysql.eronnut;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});


application.listen(3001, () => {
    console.log('Go to http://localhost:3001/api/aikajana/harkitsen_eroa');
    console.log('Go to http://localhost:3001/api/aikajana/olen_eronnut');
});