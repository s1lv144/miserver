const { Router } = require('express');

const { usuariosGet } = require('../controllers/usuarios');

const router = Router();


//router.get('/', usuariosGet );


router.get('/test/', function(req, res){
    res.send("Hello from the 'test' URL");
});
module.exports = router;