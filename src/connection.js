var mysql = require('mysql');
var express = require('express');
var application = express();

var cors = require('cors');
let querystring = require("query-string");

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

application.get('/api/haku', function (req, res) {

    console.log("api/haku");

    con.query('CREATE TABLE IF NOT EXISTS palveluhaku (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), aikuinen BIT, lapsitainuori BIT, asiantuntija BIT,  informationtype VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('TRUNCATE TABLE palveluhaku', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/ajankohtainen_informaatio.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Ajankohtainen informaatio";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/blogi.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Blogi";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/chat.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Chat";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/keskustelupalsta.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Keskustelupalsta";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/kirja_opas.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Kirja- ja opasvinkit";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/omakohtainen_tarina.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Omakohtaiset tarinat";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/tukipuhelin.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Tukipuhelin";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/video.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Videot";', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/yleinen_informaatio.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Yleistä informaatiota";', function (error, results) {
        if (error) throw error;
    });

    con.query('SELECT * FROM mysql.palveluhaku;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});

application.get('/api/haku/:id', function (req, res) {

    let value = req.url;
    value = value.split('/').pop();
    console.log("data: " + value);
    let values = querystring.parse(value);
    console.log(values);

    for (let item in values){
        console.log(item);
        con.query('SELECT * FROM mysql.palveluhaku WHERE informationtype = ?;', item, function (error, results) {
            if (error) throw error;
        });
    }

    con.query('SELECT * FROM mysql.palveluhaku WHERE informationtype = "0";', function (error, results) {
        if (error) throw error;
        res.send(results)
    });
});

application.listen(3001, () => {
    console.log('http://localhost:3001/api/aikajana/harkitsen_eroa');
    console.log('http://localhost:3001/api/aikajana/olen_eronnut');
    console.log('http://localhost:3001/api/palveluhaku');
});