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

con.connect(function (error) {
    if (error) throw error;
    console.log("Connected.");
    con.query('CREATE TABLE IF NOT EXISTS harkitsen (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), phase VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('CREATE TABLE IF NOT EXISTS eronnut (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), phase VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('CREATE TABLE IF NOT EXISTS vanhemmuus (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), phase VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('CREATE TABLE IF NOT EXISTS palveluhaku (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), aikuinen BOOLEAN DEFAULT 0, lapsitainuori BOOLEAN DEFAULT 0, asiantuntija BOOLEAN DEFAULT 0,  informationtype VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('CREATE TABLE IF NOT EXISTS lapsillejanuorille (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), aikuinen BOOLEAN DEFAULT 0, lapsitainuori BOOLEAN DEFAULT 0, asiantuntija BOOLEAN DEFAULT 0,  informationtype VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

    con.query('TRUNCATE TABLE palveluhaku', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/ajankohtainen_informaatio.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Ajankohtainen informaatio/uutiset";', function (error, results) {
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

    con.query('LOAD DATA LOCAL INFILE \'csv/peli.csv\' INTO TABLE palveluhaku FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, aikuinen, lapsitainuori, asiantuntija, informationtype) SET informationtype = "Pelit";', function (error, results) {
        if (error) throw error;
    });

    con.query('CREATE TABLE IF NOT EXISTS palveluhakutulokset (title VARCHAR(255), link VARCHAR(255), source VARCHAR(255), aikuinen BOOLEAN, lapsitainuori BOOLEAN, asiantuntija BOOLEAN,  informationtype VARCHAR(255));', function (error, results) {
        if (error) throw error;
    });

});

application.get('/api/aikajana/harkitsen_eroa', function (req, res) {

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
application.get('/api/aikajana/vanhemmuus', function (req, res) {

    con.query('TRUNCATE TABLE vanhemmuus', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/lapsen_tukeminen.csv\' INTO TABLE vanhemmuus FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source, phase);', function (error, results) {
        if (error) throw error;
    });

    con.query('SELECT * FROM mysql.vanhemmuus;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});

application.get('/api/aikajana/lapsillejanuorille', function (req, res) {

    con.query('TRUNCATE TABLE lapsillejanuorille', function (error, results) {
        if (error) throw error;
    });

    con.query('LOAD DATA LOCAL INFILE \'csv/suunnattu_nuorille.csv\' INTO TABLE lapsillejanuorille FIELDS TERMINATED BY \',\' ENCLOSED BY \'"\' LINES TERMINATED BY \'\\n\' IGNORE 1 ROWS (@dummy, title, link, source);', function (error, results) {
        if (error) throw error;
    });

    con.query('SELECT * FROM mysql.lapsillejanuorille;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});

application.get('/api/haku', function (req, res) {

    console.log("api/haku");

    con.query('SELECT * FROM mysql.palveluhaku;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });

});

application.get('/api/haku/:id', function (req, res) {

    con.query('TRUNCATE TABLE palveluhakutulokset', function (error, results) {
        if (error) throw error;
    });

    let value = req.url;
    value = value.split('/').pop();
    console.log("url: " + value);
    let query = querystring.parse(value);

    let topics = query["topic"];
    let targetgroups = query["target"];

    console.log("target " + targetgroups);
    console.log("topics: " + topics);
    console.log("topics[0]: " + topics[0]);
    console.log("topics[0] length: " + topics[0].length);

    if (targetgroups != null && targetgroups[0].length === 1) { //1 target selected

        console.log("targetgroups[0].length: " + targetgroups[0].length);
        console.log("targetgroups[0]: " + targetgroups[0]);
        console.log("targetgroups: " + targetgroups);

        if ((topics[0].length > 1)) {
            console.log("one target group has been selected and there is more than 1 topic selected.");
            for (item in topics) {
                console.log("aihe: " + topics[item]);
                console.log("kohde: " + targetgroups);

                if (targetgroups === "Aikuinen") {
                    con.query('INSERT INTO palveluhakutulokset SELECT * FROM mysql.palveluhaku WHERE informationtype = ? AND aikuinen = 1', topics[item], function (error, rows) {
                        if (error) throw error;
                    });

                } else {
                    con.query('INSERT INTO palveluhakutulokset SELECT * FROM mysql.palveluhaku WHERE informationtype = ? AND lapsitainuori = 1', topics[item], function (error, rows) {
                        if (error) throw error;
                    });
                }
            }
        } else {
            console.log("one target has been selected and just 1 topic is selected");

                console.log("topic: " + topics);
                if (targetgroups === "Aikuinen") {
                    con.query('INSERT INTO palveluhakutulokset SELECT * FROM mysql.palveluhaku WHERE informationtype = ? AND aikuinen = 1', topics, function (error, rows) {
                        if (error) throw error;
                    });

                } else {
                    con.query('INSERT INTO palveluhakutulokset SELECT * FROM mysql.palveluhaku WHERE informationtype = ? AND lapsitainuori = 1', topics, function (error, rows) {
                        if (error) throw error;
                    });
                }
        }
    } else { //when all target groups are chosen

        if (topics[0].length === 1) {

            console.log("every target group has been selected and there is just 1 topic selected.");
            con.query('INSERT INTO palveluhakutulokset SELECT * FROM mysql.palveluhaku WHERE informationtype = ?;', topics, function (error, results) {
                if (error) throw error;
            });
        } else {
            console.log("every target group has been selected and there more than 1 topic selected.");
            for (item in topics) {
                con.query('INSERT INTO palveluhakutulokset SELECT * FROM mysql.palveluhaku WHERE informationtype = ?;', topics[item], function (error, rows) {
                    if (error) throw error;
                });
            }
        }
    }

    con.query('SELECT * FROM mysql.palveluhakutulokset;', function (error, results) {
        if (error) throw error;
        res.send(results)
    });
});

application.listen(3001, () => {
    console.log('http://localhost:3001/api/aikajana/harkitsen_eroa');
    console.log('http://localhost:3001/api/aikajana/olen_eronnut');
    console.log('http://localhost:3001/api/haku');
});