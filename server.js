const express = require('express');
const pool = require("./db.js");

const hbs = require('hbs');
const html = require('html');
//const bcrypt = require("bcryptjs");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require("cors");
const app = express();
const todoRoutes = require('./server/routes/usuario');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views'));

app.use(todoRoutes);

const PORT = process.env.PORT || 7013;

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto${PORT}`);
});