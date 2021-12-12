const express = require("express");
const UserController = require("../controllers/getDispositivos");
const cors=require('./cors')


const user = express.Router();

user.route("/dispositivos")
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors, UserController.getDispositivos)

module.exports = user;