import React from "react";
// import {data} from './'


export default function TemplateONE({data}) {
  console.log(data)
  return (
    <div className="templateOne">
    <div >
        <div className="bg-white actual-pdf mt-2   p-4">
          
<div className="flex gap-2 justify-between">
<div
className="text-[18px]  w-[80%] text-left font-semibold"
>{data?.name}</div>
<div
className="w-[65%] text-[12px] font-semibold  text-right  px-1"
>{data?.email}</div>
</div>


<div className="flex justify-between ">
<div
className="text-left text-[12px] font-semibold "
>{data?.expertise}</div>
<div className=" flex text-[12px] font-semibold ">
<span className="">+91-</span>
<span className="">{data?.phone}</span>
</div>
</div>



<div className="flex justify-between">
<div
className=" text-[12px] font-semibold  w-[60%]"
>{data?.location}</div>
<div
className=" text-[12px] font-semibold "
>{data?.profileLink}</div>
</div>



<div className=" mt-2">
<div className=" text-lg">Impact I Create</div>
<div className="border my-2 border-sky-200"></div>
<div
className="w-[100%]  resize-none text-[10px]  px-1 mt-2"                     
>{data?.impactICreate}</div>
</div>




<div className="mt-2">
<div className=" text-lg">Professional Experience</div>
<div className="border my-2 border-sky-200"></div>
{data?.professionalExperience.map((e)=>(<>
<div className="flex justify-between mt-2">
<div type="text" className="text-[12px] font-semibold ">{e?.companyName}</div>
<div type="text" className="text-right text-[12px] font-semibold  ">{e?.location}</div>
</div>
<div className="flex justify-between ">
<div  className="text-[12px] font-semibold  ">{e?.jobTitle} </div>
<div   className="text-right text-[12px] font-semibold  ">{e?.durationOfWork}</div>
</div>

<div className="w-[100%] mt-1 resize-none text-[10px]    px-1" >{e?.additionalDetails}</div>
</>  
))}

</div>






<div className="mt-2">
<div className=" text-lg">Projects</div>
<div className="border my-2 border-sky-200"></div>
{data?.projects.map((e)=>(
<>
<div className="flex justify-between mt-2">
<div  className="text-[14px] font-semibold  text-sky-500 ">{e?.projectName}</div>
<div className="text-right text-[12px] font-semibold  ">{e?.role}</div>
</div>
<div className="flex justify-between ">
<div  className="text-[12px] font-semibold  ">{e?.organizationName}</div>
<div  className="text-right text-[12px] font-semibold  ">{e?.dateRange}</div>
</div>
<div className="w-[100%] mt-1 resize-none text-[10px] px-1 " >{e?.projectDescription} </div>      

</>
))}

</div>



<div className=" mt-2 ">
<div className=" text-lg">Education</div>
<div className="border my-2 border-sky-200"></div>
{data?.education.map((e)=>(
<>
    <div className="flex justify-between mt-2">
<div className="text-[12px] font-semibold  text-sky-500">{e?.schoolName}</div>
<div  className="text-right text-[12px] font-semibold ">{e?.location}</div>
</div>
<div className="flex justify-between ">
<div className="text-[12px] font-semibold ">{e?.programName}</div>
<div  className="text-right text-[12px] font-semibold ">{e?.dateRange}</div>
</div>
<div className="flex justify-between font-medium ">
<div className="text-[11px]">{e?.specialization}</div>
<div  className="text-right text-[11px]">Performance:{e?.Performance}</div>
</div>
</>
))}                
</div>


<div className=" mt-2">
<div className=" text-lg">Skills</div>
<div className="border my-2 border-sky-200"></div>
<div className="flex gap-3 text-[12px]">
{data?.skills.map((e)=>(
<div>
{e.skillName}
</div>
))}
</div>
        
</div>

<div className=" mt-2">
<div className=" text-lg">Tools</div>
<div className="border my-2 border-sky-200"></div>
<div className="flex gap-3 text-[12px]">
{data?.tools.map((e)=>(
<div>
{e},
</div>
))}
</div>
        
</div>


<div className="mt-2 ">
<div className=" text-lg">Achievements</div>
<div className="border my-2 border-sky-200"></div>
{data?.achievements.map((e)=>(
<div className="my-2">
<div  className=" text-sky-600 text-[10px] font-bold resize-none w-full" >{e?.achievementName}</div>                   
<div className=" text-sky-500 resize-none w-full text-[10px]">{e?.additionalDetails}</div>  
</div>
))}
       
</div> 
        </div>
      </div>
  </div>
  );
}
