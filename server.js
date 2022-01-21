const express = require('express');
const app = express();
//const hbs = require('hbs');

//require('./hbs/helpers');

app.use(express.static(__dirname + '/views'));
/*
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');*/


/*
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Proyecto',
        //nombre: "eSTeBaN"
    });
});

app.get('/acercade', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('acercade');
});*/


app.listen(8000, () => {
    console.log('Escuchando peticiones en el puerto 8000');
});