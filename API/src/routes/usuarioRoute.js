var app = require('../index')

const usuarioCtrl = require('../controllers/usuarioController')

app.get('/usuario', usuarioCtrl.getUsuario)
app.post('/usuario', usuarioCtrl.postUsuario)
