import React, { useState } from 'react'
import axios from 'axios'
import fileDownload from "js-file-download";
export default function Nav() {
    // const generate =async()=>{
    //   try {
    //     const response = await axios.get('http://localhost:7000/generatePDF');
        

    //   } catch (error) {
    //     console.error('Error embedding PDF:', error);
    //   }

    // }
    const [pdfUrl, setPdfUrl] = useState('');

    const generate = async () => {
      try {
        const response = await axios.get('http://localhost:7000/generatePDF', {
          responseType: 'arraybuffer', // Ensure response is treated as binary data
        });
          
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const pdfDataUrl = URL.createObjectURL(blob);

        setPdfUrl(pdfDataUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    }
    
    

    const handleldownload =async(e)=>{
    try {
   e.preventDefault()
   const response = await axios.post("http://localhost:7000/download-pdf",{pdfname:'1695278548104'}, { responseType: "blob" });
   // Use js-file-download to trigger the file download
   fileDownload(response.data, 'Resume.pdf');
    } catch (error) {
     console.log(error)
    }
     }
  return (<div className='flex flex-col justify-center '>
    <div className='navbar flex gap-5'>
      <button onClick={generate}>generate</button>
      <button onClick={handleldownload}>Download</button>
    </div>
  
    <div className='flex relative flex-col w-[100%]'>
  <h1 className='absolute py-5 text-red-500 font-bold bg-white w-[50%]  top-0 h-[3.5rem]'>PDF Viewer</h1>
  <div className=''>
    {pdfUrl && (
      <iframe className='w-[50%]'
        src={pdfUrl}
        height="700px" 
        style={{ border: 'none' }}
        title="Embedded PDF"
      ></iframe>
    )}
  </div>
</div>

  </div>
  )
}
