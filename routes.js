
const express = require("express");
const fetch = require("node-fetch");

const dateNightRoutes = express.Router();
const pool = require("./connection");

dateNightRoutes.get("/beer", (req, res) => {
  fetch(
    `https://sandbox-api.brewerydb.com/v2/beer/random?key=b904e3cf40aa84a291fe8608be20c44f`
  )
    .then((r) => r.json())
    .then((data) => res.json(data));
});

dateNightRoutes.get("/jokes", (req, res) => {
  pool.query("SELECT*FROM jokes").then((result) => {
    console.log(result.rows);
    res.json(result.rows);
  });
});

dateNightRoutes.get("/intimate", (req, res) => {
  pool.query("SELECT * FROM intimate").then((result) => {
    console.log(result.rows);
    res.json(result.rows);
  });
});

dateNightRoutes.get("/trivia", (req, res) => {
  pool.query("SELECT * FROM trivia").then((result) => {
    console.log(result.rows);
    res.json(result.rows);
  });
});

module.exports = { dateNightRoutes };
