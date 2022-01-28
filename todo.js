const pool = require("./db");

class Todo {
    //get all todos.
    async getTodos() {
        const res = await pool.query('Select * from padre').catch(console.log);
        console.log(res.rows);
        return res.rows;
        // const ab = JSON.stringify(res);
        //console.log("aqui");
        //console.log(ab.rows);
        //    return res.rows;
        //return "sss"
    }
}
module.exports = Todo;