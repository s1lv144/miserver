const express = require('express');
const cors = require('cors');
const db = require('../database/connection');
class Server {
   
    constructor() {
        this.app  = express();
        this.port = 3000;//process.env.PORT;
        this.server = require('http').createServer(this.app);
         this.paths = {
            usuarios:   '/api/usuarios',

        }
         // Middlewares
         this.middlewares();
           // Rutas de mi aplicación
        this.routes();
         
     
         
    }
    
     
    middlewares() {
        // Conectar a base de datos
   // this.dbConnection();
        // CORS
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

        // Directorio Público
     this.app.use( express.static('public') );
        // carga de archivos
        
    }
     //conectar base de datos
     async dbConnection(){
        try {
            await db.authenticate();
            console.log('base online');
            
        } catch (error) {
           
            console.log(error);
            
        }
    }
     routes() {
     //   this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
    }
    listen() {
     
        this.server.listen( this.port, () => {
           
            console.log('Servidor corriendo en puerto', this.port );
        });
        /*        const server =require('http').createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Server running at http://`);
          });*/
    }
}

module.exports = Server;