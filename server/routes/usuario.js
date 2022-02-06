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

router.get("/filtrado0", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 1 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

//Filtrado

router.get("/filtrado1", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 1 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});


router.get("/filtrado2", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 2 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado3", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 3 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado4", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 4 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado5", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 5 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado6", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 6 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado7", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 7 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado8", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 8 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado9", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 9 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado10", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 10 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado11", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 11 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado12", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 12 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado13", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 13 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado14", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 14 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado15", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 15 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado16", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 16 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado17", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 17 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado18", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 18 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado19", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 19 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado20", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 20 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

router.get("/filtrado21", (req, res) => {
    pool.query(
        'Select nombre_comunidad,sum(nacimientos) as numero_nacimientos from fact_nacimientos, dim_comunidad where fact_nacimientos.sk_comunidad = 21 AND fact_nacimientos.sk_comunidad = dim_comunidad.sk_comunidad GROUP BY nombre_comunidad',
        function(err, filas) {
            if (err) throw err;
            else {
                res.setHeader('Content-type', 'text/json');
                res.send(filas.rows)
            }
        });
});

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



router.post('/login', urlencodedParser, (req, res) => {
    const { usuario, password } = req.body;
    console.log(JSON.stringify(usuario));

    console.log(password);
    let passwordhash = bcrypt.hashSync(password, 10)
        //if (usuario && password) {
    pool.query(`SELECT * FROM usuarios WHERE usuario= '${usuario}'`, (error, respuesta) => {
        if (error) throw error
        else {
            console.log(respuesta.rows[0].password);
            if (!(bcrypt.compareSync(password, respuesta.rows[0].password))) {
                console.log('login incorrecto');
            } else {
                console.log('login correcto');

                passwordhash = null
                res.send({
                        usuario,
                        passwordhash
                    })
                    // res.end;
                    //  res.writeHead(200, { 'Content-Type': 'text/html' });
                    // res.sendFile('/')
                    /* router.get('/', (req, res) => {
                         res.render('/', {


                         });
                     });*/
                    //   html.readFileSync('../../views/index.html');
                    //res.render('localhost:7013index.html');
                    /* res.sendFile('login', {
                                         alert: true,
                                         alertTitle: "Conexion eixtosa",
                                         alertMessage: "LoginCorrecto",
                                         alertIcon: "succes",
                                         showConfirmButton: false,
                                         timer: 1500,
                                         ruta: ''

                                     });*/


            }

        }

    });



});


router.post('/form', urlencodedParser, (req, res) => {



    const { nombre_completo, usuario, password, password2 } = req.body;

    console.log(nombre_completo);
    var ps = bcrypt.hashSync(password, 10);
    console.log(ps);

    if (password == password2 && ps != "") {

        console.log("Ingreso a base de datos");
        pool.query('INSERT INTO usuarios (nombre_completo,usuario,password) VALUES ($1,$2,$3)', [nombre_completo, usuario, ps], (error, results) => {
            if (error) {
                throw error

            } else {
                ps = null

                res.send({
                    nombre_completo,
                    usuario,
                    ps
                });

            }
        });
    } else {
        console.log("contraseña no coincide");
    }



});

router.post('/actualizar', urlencodedParser, (req, res) => {
    console.log("asfdasfdfsdfsdfdsf");
    //const nombre = req.data.nombre;
    const { id } = req.body;
    console.log(id);

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
    console.log("asfdasfdfsdfsdfdsf");
    //const nombre = req.data.nombre;
    const { id } = req.body;
    console.log(id);

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
    console.log("asfdasfdfsdfsdfdsf");
    //const nombre = req.data.nombre;
    const { id } = req.body;
    console.log(id);

    pool.query("update usuarios set estado = false where id=$1 ", [id], (error, results) => {
        if (error) {
            throw error
        }
    });

    res.send({
        id
    });

});


/*  let body = req.body;

  let usuario = new Usuario({
      nombre: body.nombre,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      tole: body.roles
  });

  pool.query('insert into')
  usuario.save((err, usuarioDB) => {
      if (err) {
          return res.status(400).json({
              ok: false,
              err
          });
      }
      usuarioDB.password = null;
      res.json({
          ok: true,
          usuario: usuarioDB
      });
  });*/
//});


module.exports = router;