const http = require('http');
require("dotenv").config();
//Ahora importamos app
const app = require("app");
const mysql = require('mysql');
const hostname= process.env.PORT?'0.0.0.0':'localhost';
//Importamos el puerto
const port = process.env.PORT || 3977;
//Hacemos lo mismo para nuestra versión dela API
const { API_VERSION,config } = require ("./config");
app.listen(port, () =>{
   console.log("######################");
   console.log("###### API REST ######");
   console.log("######################");
   console.log(`http://${hostname}:${port}/api/${API_VERSION}/`);
})
