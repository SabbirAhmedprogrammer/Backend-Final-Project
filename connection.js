const { Pool } = require("pg");
const credentials = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    //CHANGE DATABASE NAME BASED ON YOUR CREATED ONE
    database: "jokes",
    ssl: false
});
module.exports = credentials;