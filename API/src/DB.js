const sql = require("mssql");

// Configuración de la conexión a la base de datos
const dbConfig = {
    user: "jordanZR",
    password: "UDB123udb",
    server: "servidorjordan.database.windows.net", // Por ejemplo, "localhost" si está en tu máquina o una dirección IP.
    database: "asiloAncianos",
};

// Conectar a la base de datos
const con = sql.connect(dbConfig, (err) => {
    if (err) {
        console.log("Error de conexión a la base de datos:", err);
    } else {
        console.log("Conexión exitosa a la base de datos.");
    }
});

module.exports = con


