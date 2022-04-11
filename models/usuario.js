
const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../database/connection');



const Usuario = db.define('Users', {
    name: {
        type: DataTypes.STRING,
       // required: [true, 'El nombre es obligatorio']       
    },
    email: {
        type: DataTypes.STRING,
        //required: [true, 'El correo es obligatorio'],
        //unique: true
    },
    password: {
        type: DataTypes.STRING,
        //required: [true, 'El correo es obligatorio'],
        //unique: true
    },
    status: {
        type: DataTypes.BOOLEAN
    },
});
/*UsuarioSchema.methods.toJSON = function() {
 //   const { __v, password, _id, ...usuario  } = this.toObject();
    usuario.created_at =createdAt;
    usuario.updated_at =updatedAt;
    return usuario;
}*/


module.exports = Usuario;

