var app = require('../index')

const citaCtrl = require('../controllers/citaController')

app.get('/citas', citaCtrl.getCitas)

app.get('/citasPaciente/:pacienteid', citaCtrl.getCitasPaciente)

app.get('/citasDoctor/:jvpmcita', citaCtrl.getCitasDoctor)

app.post('/citas', citaCtrl.postCita)
