const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'server.djai.kr',
    port: '3306',
    user: 'ai',
    password: 'aS123123!',
    database: 'mt'
})

module.exports = pool