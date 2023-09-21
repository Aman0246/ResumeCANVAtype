const path = require("path");
const puppeteer = require("puppeteer");
const { storage } = require("./firebase");
const fs = require("fs").promises;
const {ref, uploadBytes} =require ('firebase/storage')
const { getDownloadURL } = require("firebase/storage");

// const generatePDF=async(req,res)=>{
//   console.log('hellow')
//   try {
//     const browser =await puppeteer.launch({headless:true});
//     const page = await browser.newPage()
//     await page.goto('http://localhost:3000/TamplateONE',{waitUntil:'networkidle2'})
//     await page.setViewport({width:1680 , height:1050});
//     await page.waitForSelector('#root')
//     await page.waitForSelector('.templateOne')
//     const todate = new Date();
//     const pdf= await page.pdf({
//       path:`${path.join(__dirname,'./public',todate.getTime()+".pdf")}`,
//       format:'A4',
//       printBackground: true,
//     });
    
    
//     console.log('aa')
//     await browser.close();
//     res.send(pdf)

//   } catch (error) {
//     console.error("Firebase Storage Error:", error);
//     res.status(500).send("Error generating and uploading PDF.");
//   }
// }


// const generatePDF = async (req, res) => {
//   console.log('hellow');
//   try {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto('http://localhost:3000/TamplateONE', {
//       waitUntil: 'networkidle2',
//     });
//     await page.setViewport({ width: 1680, height: 1050 });
//     await page.waitForSelector('#root');
//     await page.waitForSelector('.templateOne');

//     const templateOneElement = await page.$('.templateOne');
//     const templateOneHTML = await templateOneElement.evaluate(element => {
//       return element.outerHTML;
//     });

//     const newDocument = await browser.newPage();
//     await newDocument.setContent(templateOneHTML);

//     const pdf = await newDocument.pdf({
//       path: `${path.join(__dirname, './public', new Date().getTime() + '.pdf')}`,
//       format: 'A4',
//       printBackground: true,
//     });

//     await newDocument.close();
//     await browser.close();

//     res.send(pdf);
//   } catch (error) {
//     console.error("Firebase Storage Error:", error);
//     res.status(500).send("Error generating and uploading PDF.");
//   }
// };


const generatePDF = async (req, res) => {
  console.log('hello');
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/TamplateONE', { waitUntil: 'networkidle2' });
    await page.setViewport({ width: 1680, height: 1050 });
    await page.waitForSelector('#root');
    await page.waitForSelector('.templateOne');

    const templateOneElement = await page.$('.templateOne');
    const templateOneHTML = await templateOneElement.evaluate(element => {
      return element.outerHTML;
    });

    const htmlWithTailwindCSS = `
      <html>
      <head>
        <!-- Include Tailwind CSS styles -->
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        ${templateOneHTML}
      </body>
      </html>
    `;

    const newDocument = await browser.newPage();
    await newDocument.setContent(htmlWithTailwindCSS);

    const pdf = await newDocument.pdf({
      path: `${path.join(__dirname, './public', new Date().getTime() + '.pdf')}`,
      format: 'A4',
      printBackground: true,
    });

    await newDocument.close();
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=template.pdf');
    
    
    res.send(pdf);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error generating PDF.");
  }
};

module.exports = { generatePDF };

  // // Upload the PDF file to Firebase Storage.

  //   // const storageRef = ref(storage, todate.getTime() + ".pdf");
  //   // await uploadBytes(storageRef, pdf);
  //   // Get the download URL of the PDF file.
  //   // const downloadURL = await getDownloadURL(storageRef);
  //   // res.set({
  //   //   "Content-Type": "application/pdf",
  //   //   "Content-Length": pdf.length,
  //   // });

  //   // res.send({ url: downloadURL });
  //   // res.sendFile(pdfURL);
  //   const stats = fs.statSync(pdfFilePath);
  //   res.setHeader('Content-Type', 'application/pdf');
  //     // Stream the file to the frontend
  //   const fileStream = fs.createReadStream(pdfFilePath);
  //   fileStream.pipe(res);
    

