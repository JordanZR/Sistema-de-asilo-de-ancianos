const connection = require('../DB')
const citaController = {}

var query

citaController.getCitas = (req, res)=>{
    query = "SELECT * from Citas"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}

citaController.getCitasDoctor = (req, res)=>{
    query = "SELECT * from Citas WHERE JVPMCita = '" + req.params.jvpmcita + "'"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}

citaController.getCitasPaciente = (req, res)=>{
    query = "SELECT * from Citas WHERE PacienteID = '" + req.params.pacienteid + "'"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}

citaController.postCita = (req, res)=>{
    query = "INSERT INTO Citas(PacienteID, JVPMCita, FechaCita, Detalles) VALUES('" + req.body.pacienteid +  "','" + req.body.jvpmcita + "','" + req.body.fechacita + "','" + req.body.detalles + "')"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.send("ok")
    })
}

module.exports = citaController