const mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    database: "AsiloAncianos",
    user: "root",
    password: "1234",
    connectTimeout: 500000
});

try{
    con.connect()
    console.log("DB Connected")
}catch(err){
    throw err
}


module.exports = con