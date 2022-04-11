const { Sequelize } = require('sequelize');


const db = new Sequelize('','','',{
    host: 'localhost',
    dialect:'mysql',
   // logging:false
});

module.exports = db;