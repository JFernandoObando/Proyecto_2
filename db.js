const { Pool } = require("pg");
const pool = new Pool({
    host: "localhost",
    user: "jobando",
    port: 5432,
    password: "admin",
    database: "Dimensional_Nacimientos"
});

module.exports = pool;