import React from 'react';
import hi from '../assets/hi.png';
import badge from  '../assets/badge.png';

const Card1 = () => {
  return (
    <div className="absolute w-[27%] bg-white shadow-[0px_0px_1px_rgba(40,41,61,0.48)] rounded-[12px] p-4 left-[8.4%] top-[15%] flex flex-col">
      

      <div className="  h-[22px]  text-black font-medium text-[12px] leading-[22px] tracking-[0.2px] flex justify-between bg-white place-between my-1 ml-4  ">
        <img src={hi}   className='w-[30px] h-[30px] mx-2'/>        
        <img src={badge}   className='w-[71] h-[34px] '/>
      </div>


    <div className="font-red-hat  left-8  text-black font-medium text-[16px] leading-[18px] tracking-[0.2px] my-4 ml-4 ">
        Second Officer
         <div className="font-red-hat w-[102px] h-[72px] left-8  text-black font-bold text-[36px] leading-[36px] my-2">
      Abdul Ghani
      </div>
      <div className=' font-red-hat left-8  text-black font-medium text-[12px] '>Crew ID 86526</div>
      </div>
       
       <div className=" h-[1px] bg-[#111111] opacity-[0.15] "></div>

           
   <div className="font-red-hat left-8 text-[#121212] font-medium text-[18px] leading-[24px] my-4  ml-4">
        My Last Activity <div className="font-red-hat w-[279px] h-[44px] left-8 text-[#5D6F88] font-normal text-[16px] leading-[22px] tracking-[0.2px] my-1">
       Submitted the Deck Log for <br></br> <b>1200-1600</b> Watch at 08:16 UTC
      </div>
      </div>
    </div>
  );
};

export default Card1;
