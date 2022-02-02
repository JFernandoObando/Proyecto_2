const express = require("express");
const pool = require("../../db");
const bodyParser = require('body-parser');
const router = express.Router();
//const Todo = require("../../todo");
const CircularJSON = require('circular-json');
const { response } = require("express");

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/hola", (req, res) => {
    pool.query('Select * from padre', function(err, filas) {
        if (err) throw err;
        else {
            res.setHeader('Content-type', 'text/json');
            res.send(filas.rows)
        }
    });
});



router.post('/form', urlencodedParser, (req, res) => {
    console.log("asfdasfdfsdfsdfdsf");
    const { nombre } = req.body;
    console.log(nombre);
    /*  const { nombre_completo, nombre_usuario, contraseña } = req.body;

      pool.query("insert into usuarios (nombre_completo,nombre_usuario,contraseña) values ($1,$2,$3)", [nombre_completo, nombre_usuario, contraseña],
          (err, res_) => {
              if (err) {
                  throw err;
              }
              res.sendStatus(201);
          });*/
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