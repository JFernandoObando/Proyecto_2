const { Pool } = require("pg");
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "DWH_Nacimientos"
});

module.exports = pool;