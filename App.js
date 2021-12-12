const express = require('express');
const morgan = require('morgan');


//Initializacion
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));

//Global Variables

//Routes
app.use(require('./routers/index'));

//Public

// Starting the server

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));

});





