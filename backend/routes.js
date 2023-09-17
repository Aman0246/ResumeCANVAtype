const express=require('express')
const tamplateOne =express.Router()
var path = require("path");
const { createPdf } = require('./controller');
tamplateOne.post('/creatPdf', createPdf )

module.exports = tamplateOne