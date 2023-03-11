const mysql = require('mysql');
const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : '',
    database : "students",
    port: 3307

});

module.exports = conn;