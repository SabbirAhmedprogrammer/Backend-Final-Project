
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

dateNightRoutes.get("/checklist-items", (req, res) => {
  pool.query("SELECT * FROM checklist ORDER BY id").then(result => {
    res.json(result.rows);
  });
});

// route
dateNightRoutes.post("/checklist-items", (req, res) => {
  pool.query("INSERT INTO checklist (task, completed) VALUES($1::VARCHAR, $2::BOOLEAN)", [req.body.task, req.body.completed]).then(() => {
    res.json(req.body);
  })
});

// route
dateNightRoutes.put("/checklist-items/:id", (req, res) => {
  pool.query("UPDATE checklist SET completed=$1::BOOLEAN WHERE id=$2::INT", [req.body.completed, req.params.id]).then(() => {
    res.json(req.body);
  })
});

// route
dateNightRoutes.delete("/checklist-items/:id", (req, res) => {
  pool.query("DELETE FROM checklist WHERE id=$1::INT", [req.params.id]).then(() => {
    res.json(`${req.params.id}`);
  })
});

module.exports = { dateNightRoutes };
