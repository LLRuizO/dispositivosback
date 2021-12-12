//require("dotenv").config();
//Ahora importamos app
const app = require("./app");
const mysql = require('mysql');
const hostname= process.env.PORT?'0.0.0.0':'localhost';
//Importamos el puerto
const port = process.env.PORT || 3977;
//Hacemos lo mismo para nuestra versión dela API
const { API_VERSION,config } = require ("./config");
/*
var connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err){
        throw err;
    }else{*/
        console.log("La conexión a la base de datos es correcta");

        app.listen(port, () =>{
            console.log("######################");
            console.log("###### API REST ######");
            console.log("######################");
            console.log(`http://${hostname}:${port}/api/${API_VERSION}/`);
        })
/*    }
});*/

//module.exports = connection;