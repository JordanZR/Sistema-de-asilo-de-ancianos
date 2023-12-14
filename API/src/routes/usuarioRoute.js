var app = require('../index')

const usuarioCtrl = require('../controllers/usuarioController')

app.get('/usuario/:usuario/:contrasena', usuarioCtrl.getUsuario)
app.post('/usuario', usuarioCtrl.postUsuario)
