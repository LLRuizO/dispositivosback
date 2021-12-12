const express=require('express')
const cors=require('cors')

const whitelist=['https://quiet-cove-25770.herokuapp.com']

var corsOptionsDelegate=(req,callback)=>{
    var corsOptions;
    if(whitelist.indexOf(req.header('Origin'))!==-1){
        corsOptions={origin:true}
    }else{
        corsOptions={origin:false}
    }
    callback(null,corsOptions)
}

exports.cors=cors()
exports.corsWithOptions=cors(corsOptionsDelegate)