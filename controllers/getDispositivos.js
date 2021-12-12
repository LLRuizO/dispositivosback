const User = require('../models/user')
const mysql = require('mysql');
const { config } = require ("../config");



function getDispositivos(req, result,next){   
    var connection = mysql.createConnection(config);
    connection.connect((err) => {
        if (err){
            throw err;
        }else{
            let query = "SELECT * FROM tablaidentificador join tabladispositivo on tablaidentificador.IdDispositivo = tabladispositivo.IdDispositivo join  tablaevento on tablaidentificador.IdEvento = tablaevento.IdEvento join  tablamensaje on tablaidentificador.IdMensaje = tablamensaje.IdMensaje";
  
            connection.query(query, (err, res) => {
              if (err) {
                next(err)
                return;
              }
          
              console.log("dispositivo: ", res);
              result.statusCode = 200;
              result.setHeader('Content-Type', 'application/json');
              result.json(res);
            });
        }
    }); 
}


module.exports = {
    getDispositivos
}; 