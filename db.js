const { Pool } = require("pg");
const pool = new Pool({
    host: "localhost",
    user: "jobando",
    port: 5432,
    password: "admin",
    database: "Relacional_Nacimientos"
});

module.exports = pool;