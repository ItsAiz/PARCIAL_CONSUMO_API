const route = require('express').Router()

const path = require('path')

route.get('/',(req,res)=>res.sendFile(path.join(__dirname,'../views/index.html')))

route.get('/getAddAuthor',(req,res)=>res.sendFile(path.join(__dirname,'../views/add-author.html')))

module.exports = route