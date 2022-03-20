const express = require('express');
const app = express();
const bodyParse = require("body-parser");
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get("/api/select", (req, res) => {
    const quoteSelect = "SELECT * FROM quotes";
    db.query(quoteSelect, (err, result) => {
        console.log(result)
        res.send(result);
    });
});

app.get("/api/lasts", (req, res) => {
    const quoteLasts = "SELECT * FROM quotes LIMIT 8";
    db.query(quoteLasts, (err, result) => {
        console.log(result)
        res.send(result);
    });
});

app.post("/api/insert", cors(), (req, res) => {

    const fromDeparture = req.body.fromDeparture;
    const destination = req.body.destination;
    const departureDate = req.body.departureDate;
    const retureDate = req.body.retureDate;
    const numberOfPeoples = req.body.numberOfPeoples;
    const transportation = req.body.transportation;
    const clientName = req.body.clientName;
    const clientPhone = req.body.clientPhone;

    const quoteInsert =
        "INSERT INTO quotes (fromDeparture, destination, departureDate, retureDate, numberOfPeoples, transportation, clientName, clientPhone) VALUES (?,?,?,?,?,?,?,?)";
    db.query(quoteInsert, [fromDeparture, destination, departureDate, retureDate, numberOfPeoples, transportation, clientName, clientPhone],
        (err, result) => {
            res.send(result);
        });
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on port ${PORT}`)
});