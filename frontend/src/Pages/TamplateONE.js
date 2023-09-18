import React, { useState } from "react";
import axios from 'axios'
import fileDownload from "js-file-download";
export default function TamplateONE() {
  const [inputValue, setInputValue] = useState('');
  const [inputEmail, setinputEmail] = useState('');
  const [inputProfileLink, setinputProfileLink] = useState('');
  const [names, setNames] = useState('');

  const handleInputChange = (event) => {
    // Remove non-numeric characters
    const newValue = event.target.value.replace(/[^0-9]/);
    // Limit to 10 characters
    if (newValue.length <= 10) {
      setInputValue(newValue);
    } else {
      setInputValue("");
    }
  };
  const [textValue, setTextValue] = useState('');
  const [expertise,setexpertise]=useState('')
  const [location,setLocation]=useState('')
  const [CompanyOne,setCompanyOne]=useState('')   
  const [CompanyOneP,setCompanyOneP]=useState('')   
  const [CompanyOneD,setCompanyOneD]=useState('')   
  const [CompanyOneData,setCompanyOneData]=useState('')   
  const [CompanyOneL,setCompanyOneL]=useState('')
  const [CompanyTwo,setCompanyTwo]=useState('')
  const [CompanyTwoL,setCompanyTwoL]=useState('')
  const [CompanyTwoP,setCompanyTwoP]=useState('')
  const [CompanyTwoD,setCompanyTwoD]=useState('')
  const [CompanyTwoData,setCompanyTwoData]=useState('')
  const [projectname,setprojectname]=useState('')
  const [projectPlace,setprojectPlace]=useState('')
  const [projectOrganization,setprojectOrganization]=useState('')
  const [projectOrganizationd,setprojectOrganizationd]=useState('')
  const [projectOrganizationdata,setprojectOrganizationdata]=useState('')
  const [schoolname,setschoolname]=useState('')
  const [schoolnameP,setschoolnameP]=useState('')
  const [schoolCamp,setschoolCamp]=useState('')
  const [schoolCampD,setschoolCampD]=useState('')
  const [expert,setexpert]=useState('')
  const [expertPerformance,setexpertPerformance]=useState('')
  const [expertData,setexpertData]=useState('')
  const [Tools,setTools]=useState('')
  const [Skills,setSkills]=useState('')
  const [AchievementsTwo,setAchievementsTwo]=useState('')
  const [AchievementsOne,setAchievementsOne]=useState('')

  const handelGeneratePdf =async()=>{
 try {

  await axios.post("/creatPdf",{textValue,expertise,location,CompanyOne,CompanyOneP,CompanyOneD,CompanyOneData,CompanyOneL,CompanyTwo,CompanyTwoL,CompanyTwoP,CompanyTwoD,CompanyTwoData,projectname,projectPlace,projectOrganization,projectOrganizationd,projectOrganizationdata,schoolname,schoolnameP,schoolCamp,schoolCampD,expert,expertPerformance,expertData,Tools,Skills,AchievementsTwo,AchievementsOne,inputValue,inputEmail,inputProfileLink,names})
 } catch (error) {
  
 }
  }
  const handleDownload =async(e)=>{
 try {
e.preventDefault()
const response = await axios.get("/download-pdf", { responseType: "blob" });
// Use js-file-download to trigger the file download
fileDownload(response.data, 'Resume.pdf');
 } catch (error) {
  console.log(error)
 }
  }
  return (
    <>
   
<button onClick={handelGeneratePdf}  className='bg-sky-500 text-white p-2 rounded'>Generate</button>
<button onClick={handleDownload}  className='bg-sky-500 text-white p-2 rounded'>Download PDF</button>
    <form>
      
      <div className='bg-neutral-200 flex justify-center items-center h-[875px]'>

      <div className="bg-white max-w-[612px] min-w-[612px] min-h-[872px] max-h-[872px] p-4">

              <div className="flex justify-between">
                      <input
                        type="text"
                        value={names}
                        onChange={(e)=>setNames(e.target.value)}
                        placeholder="Name"
                        className="text-[18px] outline-none w-[80%] text-left font-semibold"
                      ></input>
                      <input
                        type="email"
                        className="w-[65%] text-[12px] font-semibold  text-right outline-none px-1"
                        value={inputEmail}
                        onChange={(e)=>setinputEmail(e.target.value)}
                        placeholder="Enter your Gmail - @gmail.com"
                        required
                      ></input>
              </div>

              <div className="flex justify-between ">
                      <input
                        type="text"
                        placeholder="Expertise"
                        value={expertise}
                        onChange={(e)=>setexpertise(e.target.value)}  
                        className="text-left text-[12px] font-semibold  outline-none w-[50%]"
                      ></input>
                      <div className=" w-[23%] flex ">
                        <span className="">+91-</span>
                        <input
                          type="text"
                          className=" w-[80%] outline-none  font-semibold   px-1"
                          value={inputValue}
                          onChange={handleInputChange}
                          maxLength={10}
                          placeholder="XXXXXXXXX"
                          required
                        ></input>
                        </div>
              </div>

              <div className="flex justify-between">
                    <input
                      type="text"
                      placeholder="Location"
                      value={location}
                      onChange={(e)=>setLocation(e.target.value)}
                      className="outline-none text-[12px] font-semibold  w-[60%]"
                    ></input>
                    <input
                      type="URL"
                      className="w-[85%] text-[12px] font-semibold  text-right outline-none px-1"
                      placeholder="Link of your profile here"
                      value={inputProfileLink}
                      onChange={(e)=>setinputProfileLink(e.target.value)}
                      required
                    ></input>
               </div>

{/* //-------------------------------------------------------------------------------------------------------- */}
            <div className="">
                    <div className=" text-lg">Impact I Create</div>
                    <div className="border border-sky-200"></div>
                    <textarea
                      type="text"
                      rows={3}
                      className="w-[100%]  resize-none text-[10px]  px-1"
                      placeholder="Conducted user research and analyzed data to identify design opportunities and inform design decisions. Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups  hsbdnhsnhds hsjhcaljc;osj;oj kidshlkahsd jbdsbdskbcbds jkbsckjsdbcb bkjjbcab"
                      value={textValue}
                      onChange={(e)=>setTextValue(e.target.value)}
                      required
                      ></textarea>
               </div>
{/* //-------------------------------------------------------------------------------------------------------- */}


            <div className="">
                    <div className=" text-lg">Professional Experience</div>
                    <div className="border border-sky-200"></div>
                    <div className="flex justify-between ">
                      <input type="text" value={CompanyOne} onChange={(e)=>setCompanyOne(e.target.value)} placeholder="ABC Company" className="text-[12px] font-semibold outline-none"></input>
                      <input type="text" value={CompanyOneL} onChange={(e)=>setCompanyOneL(e.target.value)} placeholder="Delhi, India" className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>
                    <div className="flex justify-between ">
                      <input type="text" value={CompanyOneP} onChange={(e)=>setCompanyOneP(e.target.value)}  placeholder="UX Design Intern" className="text-[12px] font-semibold  outline-none"></input>
                      <input type="text"  value={CompanyOneD} onChange={(e)=>setCompanyOneD(e.target.value)} placeholder="Jan 2023 - Present"  className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>

                  <textarea  value={CompanyOneData} onChange={(e)=>setCompanyOneData(e.target.value)} placeholder="Conducted user research and analyzed data to identify design opportunities and inform design decisions followed by bjddi hrb rjrjr udud udbbd drrvrd
. Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups  
. Maintained High Standard work"  className="w-[100%] mt-1 resize-none text-[10px]  overflow-y-hidden  px-1" rows={4}></textarea>
                 
                 
                    <div className="flex justify-between ">
                      <input type="text"  value={CompanyTwo} onChange={(e)=>setCompanyTwo(e.target.value)} placeholder="ABC Company" className="text-[12px] font-semibold  outline-none"></input>
                      <input type="text" value={CompanyTwoL} onChange={(e)=>setCompanyTwoL(e.target.value)} placeholder="Delhi, India" className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>
                    <div className="flex justify-between ">
                      <input type="text" value={CompanyTwoP} onChange={(e)=>setCompanyTwoP(e.target.value)} placeholder="UX Design Intern" className="text-[12px] font-semibold  outline-none"></input>
                      <input type="text" value={CompanyTwoD} onChange={(e)=>setCompanyTwoD(e.target.value)} placeholder="Jan 2023 - Present"  className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>

                  <textarea value={CompanyTwoData} onChange={(e)=>setCompanyTwoData(e.target.value)} placeholder="Conducted user research and analyzed data to identify design opportunities and inform design decisions followed by bjddi hrb rjrjr udud udbbd drrvrd
. Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups  
. Maintained High Standard work"  className="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows={4}></textarea>
              </div>
     


            <div className="">
                    <div className=" text-lg">Projects</div>
                    <div className="border border-sky-200"></div>
                    <div className="flex justify-between">
                      <input type="text" value={projectname} onChange={(e)=>setprojectname(e.target.value)} placeholder="XYZ Project" className="text-[12px] font-semibold  text-sky-500 outline-none"></input>
                      <input type="text" value={projectPlace} onChange={(e)=>setprojectPlace(e.target.value)} placeholder="Freelance Designer" className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>
                    <div className="flex justify-between ">
                      <input type="text" value={projectOrganization} onChange={(e)=>setprojectOrganization(e.target.value)}  placeholder="Organization Name" className="text-[12px] font-semibold  outline-none"></input>
                      <input type="text" value={projectOrganizationd} onChange={(e)=>setprojectOrganizationd(e.target.value)} placeholder="Jun 2022 - Dec 2022"  className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>
                  <textarea value={projectOrganizationdata} onChange={(e)=>setprojectOrganizationdata(e.target.value)} placeholder=' . Designed wireframes, prototypes, and visual designs for mobile and web-based products  hrbkjfrn drbjdrhrh duidr3uhbdrasd   . sdsada deiudr3bgd3riodrb  dud3rhdrhr dwe
                   . Conducted usability testing and iterated on design solutions based on user feedback  'className="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows={3}></textarea>                   
             </div>


            <div className="  ">
                    <div className=" text-lg">Education</div>
                    <div className="border border-sky-200"></div>
                    <div className="flex justify-between">
                      <input type="text" value={schoolname} onChange={(e)=>setschoolname(e.target.value)}  placeholder="School of Design" className="text-[12px] font-semibold  text-sky-500 outline-none"></input>
                      <input type="text" value={schoolnameP} onChange={(e)=>setschoolnameP(e.target.value)}  placeholder="Delhi, India" className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>
                    <div className="flex justify-between ">
                      <input type="text" value={schoolCamp} onChange={(e)=>setschoolCamp(e.target.value)}   placeholder="UX Design Bootcamp" className="text-[12px] font-semibold  outline-none"></input>
                      <input type="text" value={schoolCampD} onChange={(e)=>setschoolCampD(e.target.value)} placeholder="Jan 2023 - Feb 2023"  className="text-right text-[12px] font-semibold  outline-none"></input>
                    </div>
                    <div className="flex justify-between font-medium ">
                      <input type="text" value={expert} onChange={(e)=>setexpert(e.target.value)}  placeholder="Specialization" className="text-[11px] outline-none"></input>
                      <input type="text" value={expertPerformance} onChange={(e)=>setexpertPerformance(e.target.value)}   placeholder="Performance: 88%"  className="text-right text-[11px] outline-none"></input>
                    </div>
                  <textarea value={expertData} onChange={(e)=>setexpertData(e.target.value)}  placeholder=' Intensive, full-time program that provided hands-on training in user-centered design, prototyping, and visual design  
'className="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows={2}></textarea>                   
             </div>




                    <div className="  ">
                            <div className=" text-lg">Skills</div>
                            <div className="border border-sky-200"></div>
                          <textarea  value={Skills} onChange={(e)=>setSkills(e.target.value)}  placeholder='React, Nodejs, MongoDb, figma, js, React, Nodejs, MongoDb, figma, js,React, Nodejs, MongoDb, figma, js,React, Nodejs, MongoDb, figma, js,React, Nodejs, MongoDb, figma, js, 
        'className="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows={2}></textarea>                   
                    </div>




                    <div className=" ">
                            <div className=" text-lg">Tools</div>
                            <div className="border border-sky-200"></div>
                          <textarea  value={Tools} onChange={(e)=>setTools(e.target.value)}  placeholder='Bootstrap, Foundation, CSS Grid Layout, Browser Developer Tools, AWS Elastic Load Balancing (ELB), Materialize CSS, Media Queries 'className="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows={2}></textarea>                   
                    </div>


                    <div className=" ">
                            <div className=" text-lg">Achievements</div>
                            <div className="border border-sky-200"></div>
                          <textarea value={AchievementsOne} onChange={(e)=>setAchievementsOne(e.target.value)} placeholder="Digital Marketing Certification by Google" className=" text-sky-500 text-[10px] resize-none w-full" rows={2}></textarea>                   
                          <textarea value={AchievementsTwo} onChange={(e)=>setAchievementsTwo(e.target.value)} className=" text-sky-500 resize-none w-full text-[10px]" placeholder=" dbveb ebdbdbd bedbbe bdehd djudedeb eddbde jdee djndnbde bebefbbfe jebebfe bffgfrgf efbhefbfeiu dehjbdebefce dehjcebfe" rows={1}></textarea>                   
                    </div>
      </div>
      </div>
    </form>
    </>
  );
}
