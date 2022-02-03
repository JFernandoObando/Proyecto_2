const express = require("express");
const pool = require("../../db");
const bodyParser = require('body-parser');
const router = express.Router();
//const Todo = require("../../todo");
const CircularJSON = require('circular-json');
const { response } = require("express");

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



router.post('/form', urlencodedParser, (req, res) => {
    console.log("asfdasfdfsdfsdfdsf");
    //const nombre = req.data.nombre;
    const { nombre_completo, usuario, password } = req.body;
    pool.query('INSERT INTO usuarios (nombre_completo,usuario,password) VALUES ($1,$2,$3)', [nombre_completo, usuario, password], (error, results) => {
        if (error) {
            throw error
        }
    });

    res.send({
        nombre_completo,
        usuario,
        password
    });


    /*  const { nombre_completo, nombre_usuario, contraseña } = req.body;

      pool.query("insert into usuarios (nombre_completo,nombre_usuario,contraseña) values ($1,$2,$3)", [nombre_completo, nombre_usuario, contraseña],
          (err, res_) => {
              if (err) {
                  throw err;
              }
              res.sendStatus(201);
          });*/
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