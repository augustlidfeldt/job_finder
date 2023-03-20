const Pool = require('pg').Pool;

const pool = new Pool({
    user: "august",
    password: "",
    host: "localhost",
    post: "5432",
    database: "pernjob"
});

module.exports = pool

