const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../../db");
//const hbs = require('hbs');
const ht = require("fs")
    //const pool = require("../../views/usuarios.html");
const bodyParser = require('body-parser');
const router = express.Router();
//const Todo = require("../../todo");
const CircularJSON = require('circular-json');
const { response } = require("express");
const { body } = require("express-validator");

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//FILTRADO INICIAL
router.get("/filtrado0", (req, res) => {

    pool.query(
        'Select edad_madre,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 21 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad and edad_madre between 15 and 20  GROUP BY nombre_comunidad,edad_madre order by edad_madre asc',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });



});

//FILTRADO MADRE
router.post("/filtradot", (req, res) => {
    const { dato, dato1 } = req.body;

    pool.query(
        `Select edad_madre,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = ${dato1} AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad and edad_madre between ${dato}  GROUP BY nombre_comunidad,edad_madre order by edad_madre asc`,
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });

});

//FILTRADO PADRE
router.post("/filtradof", (req, res) => {
    const { dato, dato1 } = req.body;
    pool.query(`Select rango_edad, sum(nacimientos) as numero_nacimientos from fact_nacimientos,dim_padre where fact_nacimientos.sk_comunidad = ${dato1} and fact_nacimientos.sk_padre = dim_padre.sk_padre  and  fact_nacimientos.sk_padre between ${dato} GROUP BY rango_edad order by rango_edad asc`,

        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });

});


//CARGAR LISTA DE USUARIOS
router.get("/lista", (req, res) => {
    pool.query(
        'Select id,usuario,role,estado from usuarios order by id asc',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});


//LOGIN
router.post('/login', urlencodedParser, (req, res) => {
    const { usuario, password, rp } = req.body;
    if (usuario == "" || password == "") {

        res.send("ingrese usuario y contraseña");
    } else {


        let passwordhash = bcrypt.hashSync(password, 10)


        pool.query(`SELECT * FROM usuarios WHERE usuario= '${usuario}'`, (error, respuesta) => {
            if (error) throw error
            else {
                if (usuario && password) {


                    if (respuesta.rowCount == 0 || !(bcrypt.compareSync(password, respuesta.rows[0].password))) {

                        res.send("error");


                    } else {
                        var rp = respuesta.rows[0].role;
                        console.log('login correcto');

                        passwordhash = null
                        res.send({
                            usuario,
                            passwordhash,
                            rp
                        });

                    }
                } else {
                    console.log(err + "usuario o contraseña no encontrada");
                }


            }

        });
    }



});


router.post('/form', urlencodedParser, (req, res) => {


    var miId;
    const { nombre_completo, usuario, password, password2 } = req.body;
    if (nombre_completo == "" || usuario == "" || password == "" || password2 == "") {
        console.log("Ingrese un valor");
        res.send("1");
    } else {


        var ps = bcrypt.hashSync(password, 10);


        if (password == password2 && ps != "") {
            pool.query('SELECT * FROM usuarios', (error, results) => {
                miId = (results.rowCount + 1);

                pool.query('INSERT INTO usuarios (nombre_completo,usuario,password,id) VALUES ($1,$2,$3,$4)', [nombre_completo, usuario, ps, miId], (error, results) => {
                    if (error) {

                        res.send("2")


                    } else {
                        ps = null

                        res.send({
                            nombre_completo,
                            usuario,
                            ps
                        });

                    }
                });
            });



        } else {
            console.log("contraseña no coincide");
            res.send("3")
        }

    }

});

router.post('/actualizar', urlencodedParser, (req, res) => {

    const { id } = req.body;


    pool.query("update usuarios set role = 'ADMIN_ROLE' where id=$1 ", [id], (error, results) => {
        if (error) {
            throw error
        }
    });

    res.send({
        id
    });

});

router.post('/cambio_rol', urlencodedParser, (req, res) => {

    const { id } = req.body;


    pool.query("update usuarios set role = 'USER_ROLE' where id=$1 ", [id], (error, results) => {
        if (error) {
            throw error
        }
    });

    res.send({
        id
    });

});

router.post('/cambio_estado', urlencodedParser, (req, res) => {


    const { id } = req.body;


    pool.query("update usuarios set estado = false where id=$1 ", [id], (error, results) => {
        if (error) {
            throw error
        }
    });

    res.send({
        id
    });

});



module.exports = router;