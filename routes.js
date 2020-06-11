// require the Express module
const express = require("express");

//creates a new router object
const dateNightRoutes = express.Router();
const pool = require("./connection");




dateNightRoutes.get("/jokes", (req, res) => {
    // .json sends response as JSON
    // res.status(200).json(items); //note: defaults to 200 if request has succeeded.
    pool.query("SELECT * FROM jokes").then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })

});

dateNightRoutes.get("/intimate", (req, res) => {
    // .json sends response as JSON
    // res.status(200).json(items); //note: defaults to 200 if request has succeeded.
    pool.query("SELECT * FROM intimate").then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })

});

dateNightRoutes.get("/trivia", (req, res) => {
    // .json sends response as JSON
    // res.status(200).json(items); //note: defaults to 200 if request has succeeded.
    pool.query("SELECT * FROM trivia").then(result => {
        console.log(result.rows);
        res.json(result.rows);
    })

});



module.exports = { dateNightRoutes };
