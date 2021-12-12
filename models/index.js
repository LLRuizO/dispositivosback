const mysql = require("mysql");
const Schema = mysql.Schema;

require('mysql-currency').loadType(mysql);
const Currency = mysql.Types.Currency;

const DispositivosSchame = new Schema({
    IdDispositivo:{
        type: Number,
        require:true
    },
    NameDispositivo:{
        type:String,
        require:true
    },
    price: {
        type: String,
        required: true,
    },
    stateProduct:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    money:{
        type:String,
        require:true
    },
});