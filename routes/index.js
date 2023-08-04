const route = require('express').Router()

const path = require('path')

route.get('/',(req,res)=>res.sendFile(path.join(__dirname,'../views/index.html')))

route.get('/getAddDish',(req,res)=>res.sendFile(path.join(__dirname,'../views/add-dish.html')))

module.exports = route