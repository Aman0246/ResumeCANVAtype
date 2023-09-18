const express=require('express')
const tamplateOne =express.Router()
var path = require("path");
const { createPdf } = require('./controller');
tamplateOne.post('/creatPdf', createPdf )

// Define a route to download the generated PDF
tamplateOne.get("/download-pdf", (req, res) => {
    const pdfPath = './Resume.pdf';
    res.download(pdfPath); // This will trigger a download in the user's browser
  });
  

module.exports = tamplateOne