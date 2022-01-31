const express = require("express");
const pool = require("../../db");
const router = express.Router();
//const Todo = require("../../todo");
const CircularJSON = require('circular-json');
const { response } = require("express");


router.get("/hola", (req, res) => {
    pool.query('Select * from padre', function(err, filas) {
        if (err) throw err;
        else {
            res.setHeader('Content-type', 'text/json');
            res.send(filas.rows)
        }
    });
});

module.exports = router;