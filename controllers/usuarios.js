const { response, request } = require('express');



const Usuario = require('../models/usuario');

const usuariosGet = async(req = request, res = response) => {

  usuarios = await Usuario.findAll();

    res.json({ usuarios });
}

module.exports = {
    usuariosGet
   
}