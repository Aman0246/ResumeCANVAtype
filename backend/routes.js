const express=require('express')
const tamplateOne =express.Router()
var path = require("path");
const { generatePDF } = require('./controller');
const { UserData } = require('./models/UserData');
//generate
tamplateOne.get('/generatePDF', generatePDF )

//getdata
tamplateOne.get('/data',async(req,res)=>{
let data =await UserData.findOne({email:'john.doe@example.com'})
res.send({data:data})
})

// Define a route to download the generated PDF
tamplateOne.post("/download-pdf",async(req, res) => {
  let {pdfname} = req.body
    const pdfPath = `./public/${pdfname}.pdf`;
    res.download(pdfPath); // This will trigger a download in the user's browser
  });
  // const handleDownload =async(e)=>{
  //   try {
  //  e.preventDefault()
  //  const response = await axios.get("/download-pdf", { responseType: "blob" });
  //  // Use js-file-download to trigger the file download
  //  fileDownload(response.data, 'Resume.pdf');
  //   } catch (error) {
  //    console.log(error)
  //   }
  //    }
  

module.exports = tamplateOne