const puppeteer = require("puppeteer");
const fs = require("fs").promises;
const createPdf = async (req, res) => {
  let {
    textValue,
    expertise,
    location,
    CompanyOne,
    CompanyOneP,
    CompanyOneD,
    CompanyOneData,
    CompanyOneL,
    CompanyTwo,
    CompanyTwoL,
    CompanyTwoP,
    CompanyTwoD,
    CompanyTwoData,
    projectname,
    projectPlace,
    projectOrganization,
    projectOrganizationd,
    projectOrganizationdata,
    schoolname,
    schoolnameP,
    schoolCamp,
    schoolCampD,
    expert,
    expertPerformance,
    expertData,
    Tools,
    Skills,
    AchievementsTwo,
    AchievementsOne,
    inputValue,
    inputEmail,
    inputProfileLink,
    names,
  } = req.body;
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    const pdfFilePath = "Resume.pdf";
    const pdfExists = await fileExists(pdfFilePath);
    if (pdfExists) {
        // If the PDF file exists, delete it to overwrite
        await fs.unlink(pdfFilePath);
      }
      async function fileExists(filePath) {
        try {
          await fs.access(filePath);
          return true;
        } catch (error) {
          return false;
        }
      }
  

    await page.setContent(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Template ONE</title>
            <!-- Add your CSS styles and Tailwind CSS CDN link here -->
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://cdn.tailwindcss.com/2.2.19/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
            <form>
                <div class='bg-neutral-100 flex justify-center items-center  h-[875px]'>
        
                    <div class="bg-white max-w-[800px] min-w-[800px] min-h-[872px] max-h-[872px] p-4">
        
                        <div class="flex justify-between">
                            <input
                                type="text"
                                value="${names}"
                                placeholder="Name"
                                class="text-lg outline-none w-[80%] text-left font-semibold"
                            ></input>
                            <input
                                type="email"
                                class="w-[65%] text-[12px] font-semibold  text-right outline-none px-1"
                                value="${inputEmail}"
                                placeholder="Enter your Gmail - @gmail.com"
                                required
                            ></input>
                        </div>
        
                        <div class="flex justify-between ">
                            <input
                                type="text"
                                placeholder="Expertise"
                            value="${expertise}"
                                class="text-left text-[12px] font-semibold  outline-none w-[50%]"
                            ></input>
                            <div class=" w-[23%] flex ">
                                <span class="">+91-</span>
                                <input
                                    type="text"
                                    class=" w-[80%] outline-none  font-semibold   px-1"
                                value="${inputValue}"
                                    maxLength="10"
                                    placeholder="XXXXXXXXX"
                                    required
                                ></input>
                            </div>
                        </div>
        
                        <div class="flex justify-between">
                            <input
                                type="text"
                                placeholder="Location"
                            value="${location}"
                                class="outline-none text-[12px] font-semibold  w-[60%]"
                            ></input>
                            <input
                                type="URL"
                                class="w-[85%] text-[12px] font-semibold  text-right outline-none px-1"
                                placeholder="Link of your profile here"
                            value="${inputProfileLink}"
                                required
                            ></input>
                        </div>
        
                        <!-- Impact I Create -->
                        <div class="">
                            <div class="text-lg">Impact I Create</div>
                            <div class="border border-sky-200"></div>
                            <textarea
                                type="text"
                                rows="3" 
                                value="${textValue}"
                                class="w-[100%] resize-none text-[10px]  px-1"
                                placeholder="Conducted user research and analyzed data to identify design opportunities and inform design decisions. Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups  hsbdnhsnhds hsjhcaljc;osj;oj kidshlkahsd jbdsbdskbcbds jkbsckjsdbcb bkjjbcab"
                                required
                            ></textarea>
                        </div>
        
                        <!-- Professional Experience -->
                        <div class="">
                            <div class="text-lg">Professional Experience</div>
                            <div class="border border-sky-200"></div>
                            <div class="flex justify-between ">
                                <input type="text"value="${CompanyOne}" placeholder="ABC Company" class="text-[12px] font-semibold outline-none"></input>
                                <input type="text"value="${CompanyOneL}" placeholder="Delhi, India" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <div class="flex justify-between ">
                                <input type="text"value="${CompanyOneP}" placeholder="UX Design Intern" class="text-[12px] font-semibold  outline-none"></input>
                                <input type="text"value="${CompanyOneD}" placeholder="Jan 2023 - Present" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <textarea value="${CompanyOneData}" placeholder="Conducted user research and analyzed data to identify design opportunities and inform design decisions followed by bjddi hrb rjrjr udud udbbd drrvrd
        . Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups  
        . Maintained High Standard work" class="w-[100%] mt-1 resize-none text-[10px]  overflow-y-hidden  px-1" rows="4"></textarea>
                            
                            <div class="flex justify-between ">
                                <input type="text"value="${CompanyTwo}" placeholder="ABC Company" class="text-[12px] font-semibold  outline-none"></input>
                                <input type="text" value="${CompanyTwoL}" placeholder="Delhi, India" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <div class="flex justify-between ">
                                <input type="text"value="${CompanyTwoP}" placeholder="UX Design Intern" class="text-[12px] font-semibold  outline-none"></input>
                                <input type="text"value="${CompanyTwoD}" placeholder="Jan 2023 - Present" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <textarea value="${CompanyTwoData}" placeholder="Conducted user research and analyzed data to identify design opportunities and inform design decisions followed by bjddi hrb rjrjr udud udbbd drrvrd
        . Collaborated with cross-functional teams to create wireframes, prototypes, and high-fidelity mockups  
        . Maintained High Standard work" class="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows="4"></textarea value=$>
                        </div>
        
                        <!-- Projects -->
                        <div class="">
                            <div class="text-lg">Projects</div>
                            <div class="border border-sky-200"></div>
                            <div class="flex justify-between">
                                <input type="text"value="${projectname}" placeholder="XYZ Project" class="text-[12px] font-semibold  text-sky-500 outline-none"></input>
                                <input type="text" value="${projectPlace}" placeholder="Freelance Designer" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <div class="flex justify-between ">
                                <input type="text"value="${projectOrganization}" placeholder="Organization Name" class="text-[12px] font-semibold  outline-none"></input>
                                <input type="text"value="${projectOrganizationd}" placeholder="Jun 2022 - Dec 2022" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <textarea value="${projectOrganizationdata}" placeholder=" . Designed wireframes, prototypes, and visual designs for mobile and web-based products  hrbkjfrn drbjdrhrh duidr3uhbdrasd   . sdsada deiudr3bgd3riodrb  dud3rhdrhr dwe
         . Conducted usability testing and iterated on design solutions based on user feedback  " class="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows="3"></textarea>
                        </div>
        
                        <!-- Education -->
                        <div class=" ">
                            <div class="text-lg">Education</div>
                            <div class="border border-sky-200"></div>
                            <div class="flex justify-between">
                                <input type="text" value="${schoolname}" placeholder="School of Design" class="text-[12px] font-semibold  text-sky-500 outline-none"></input>
                                <input type="text" value="${schoolnameP}" placeholder="Delhi, India" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <div class="flex justify-between ">
                                <input type="text" value="${schoolCamp}" placeholder="UX Design Bootcamp" class="text-[12px] font-semibold  outline-none"></input>
                                <input type="text"value="${schoolCampD}" placeholder="Jan 2023 - Feb 2023" class="text-right text-[12px] font-semibold  outline-none"></input>
                            </div>
                            <div class="flex justify-between font-medium ">
                                <input type="text"value="${expert}" placeholder="Specialization" class="text-[11px] outline-none"></input>
                                <input type="text"value="${expertPerformance}" placeholder="Performance: 88%" class="text-right text-[11px] outline-none"></input>
                            </div>
                            <textarea value="${expertData}" placeholder=" Intensive, full-time program that provided hands-on training in user-centered design, prototyping, and visual design  " class="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows="2"></textarea value=$>
                        </div>
        
                        <!-- Skills -->
                        <div class="  ">
                            <div class="text-lg">Skills</div>
                            <div class="border border-sky-200"></div>
                            <textarea value="${Skills}" placeholder='React, Nodejs, MongoDb, figma, js, React, Nodejs, MongoDb, figma, js,React, Nodejs, MongoDb, figma, js,React, Nodejs, MongoDb, figma, js,React, Nodejs, MongoDb, figma, js, ' class="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows="2"></textarea>
                        </div>
        
                        <!-- Tools -->
                        <div class=" ">
                            <div class="text-lg">Tools</div>
                            <div class="border border-sky-200"></div>
                            <textarea value="${Tools}" placeholder='Bootstrap, Foundation, CSS Grid Layout, Browser Developer Tools, AWS Elastic Load Balancing (ELB), Materialize CSS, Media Queries ' class="w-[100%] mt-1 resize-none text-[10px] overflow-y-hidden  px-1" rows="2"></textarea>
                        </div>
        
                        <!-- Achievements -->
                        <div class=" ">
                            <div class="text-lg">Achievements</div>
                            <div class="border border-sky-200"></div>
                            <textarea value="${AchievementsOne}" placeholder="Digital Marketing Certification by Google" class=" text-sky-500 text-[10px] resize-none w-full" rows="1"></textarea value=$>
                            <textarea value="${AchievementsTwo}" placeholder=" dbveb ebdbdbd bedbbe bdehd djudedeb eddbde jdee djndnbde bebefbbfe jebebfe bffgfrgf efbhefbfeiu dehjbdebefce dehjcebfe" class=" text-sky-500 resize-none w-full text-[10px]" rows="1"></textarea value=$>
                        </div>
                    </div>
                </div>
            </form>
        </body>
        </html>
        `);
        
    // Create PDF
    await page.pdf({
      path: "Resume.pdf",
      printBackground: true,
    });

    console.log("PDF generated successfully.");
    await browser.close();
    res.send("PDF generated successfully.")
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = { createPdf };
