const connection = require('../DB')
const usuarioCtrl = {}

var query

usuarioCtrl.getUsuario = (req, res)=>{
    query = "SELECT * from Usuarios WHERE Usuario =  '" + req.params.usuario + "' AND Contraseña = '" + req.params.contrasena + "'"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}


usuarioCtrl.postUsuario = (req, res)=>{
    query = "INSERT INTO Usuarios(DUI, Rol, PrimerNombre, PrimerApellido, FechaNacimiento, Usuario, Contraseña, JVPM) VALUES('" + req.body.dui +  "','" + req.body.rol + "','" + req.body.primernombre + "','" + req.body.primerapellido + "','" + req.body.fechanacimiento + "','" + req.body.usuario + "','" + req.body.contrasena + "','" + req.body.jvpm + "')"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        query = "SELECT * from Usuarios WHERE Usuario =  '" + req.body.usuario + "' AND Contraseña = '" + req.body.contrasena + "'"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

module.exports = usuarioCtrl