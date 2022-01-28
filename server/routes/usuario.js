const express = require("express");
const router = express.Router();
const Todo = require("../../todo");
const CircularJSON = require('circular-json');




//Get all todos.
/*
router.get('/k', (req, res) => {
    res.render('index', {
        titulo: "home",
        nombre: "jUan",

    });
    console.log("dfsdfsd");
});*/

router.get("/hola", async(err, res) => {

    let todos = await new Todo().getTodos();
    // console.log("ssssssssssssssssss");
    // console.log(todos);
    res.setHeader('Content-type', 'text/json');
    res.send(todos);
    console.log(todos);
    //let as = res.json(todos);
    console.log("ddddddddddddddddddd");
    // console.log(res);
    // const cust = JSON.parse(as);
    //  let asda = CircularJSON.stringify(as);
    /*
        res.setHeader('Content-type', 'text/json');
        res.send(as);
        return res.status(200).json;
        // res.render('index', { title: "dddd" });
        // res.end;
        //   res.json(todos);
    */

});
/*
router.get("/getDatos", (req, res) => {

    let todos = new Todo().getTodos();
    let as = res.json(todos);
    const file = fs.readFileSync(as, 'utf-8');
    console.log(file);
    res.setHeader('Content-type', 'text/json');
    res.send(as);
    // res.render('index', { title: "dddd" });
    // res.end;
    //   res.json(todos);


});*/




module.exports = router;