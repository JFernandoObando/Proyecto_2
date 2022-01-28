const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require("cors");
const app = express();
const todoRoutes = require('./server/routes/usuario');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static(__dirname + '/views'));

/*
app.get("/", (req, res) => {
    res.setHeader('Content-type', 'text/json');
    res.sendFile('./views/index.html')
        //  res.send("hello world!");
    let as = "ssssssssssssssssss";
    res.render('index', { as });
});
*/
app.use(todoRoutes);

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto${PORT}`);
});


//const { use } = require('express/lib/application');

/*

app.get("/", (req, res) => {
    res.send("hello world!");
});*/
/*
app.get("/todos", async(req, res) => {
        try {
            const allTodo = await pool.query('Select * from padre');
            console.log("aaaaaaaaaaa");
            console.log(res.json(allTodo.rows));
            console.log(allTodo.rows);
        } catch (err) {
            console.error(err.message);
        }
    })*/
/*
const getDatos = async() => {
    const res = await pool.query('Select * from padre');
    console.log("$$$$");
    console.log(res.rows);
    pool.end;
};*/
//getDatos();
//client.connect();