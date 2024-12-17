import React from 'react';
import boat from '../assets/boat.png';
import badge from  '../assets/badge.png';

const Card2 = () => {
  return (
    <div className=" absolute w-[27%] bg-white shadow-[0px_0px_1px_rgba(40,41,61,0.48)] rounded-[12px] p-4 left-[8.4%] top-[60%] flex flex-col ">
      
      <div className="  h-[22px]  text-black font-medium text-[12px] leading-[22px] tracking-[0.2px] flex justify-between bg-white place-between my-2 ml-4  ">
        <img src={boat}   className='w-[45px] h-[45px] mx-2'/>        
        <div className=' font-red-hat  text-black font-bold text-[20px] my-2'>SGSIN - NOOSL</div>
      </div>


    <div className="font-red-hat  left-8  text-black font-medium text-[16px] leading-[18px] tracking-[0.2px] my-5 ml-4 ">
        Statement of Facts
         <div className="font-red-hat  left-8  text-black text-[12px] leading-[18px]">
        Current Status
      </div>
      <div className=' font-red-hat left-8  text-black font-bold text-[18px] text-[#5A5B6A] my-6'>Cargo First List</div>
       <div className=" h-[1px] bg-[#111111] opacity-[0.15] mr-4"></div>
      </div>
       
      

           
     
      <div className="   flex justify-between bg-white place-between my-2 ml-4  ">
                     <div className=' font-red-hat  text-black font-bold text-[20px] flex flex-col'><div className="font-red-hat font-medium text-[12px] leading-[18px]">Next Port Call</div>
                     <div  className="font-red-hat font-medium text-[15px] leading-[18px] text-[#5A5B6A]">INVTZI</div></div>

        <div className=' font-red-hat  text-black font-bold text-[20px] my-2'><div className=' font-red-hat  text-black font-bold text-[20px]  flex flex-col'><div className="font-red-hat font-medium text-[12px] leading-[18px]">ETA</div>
                     <div  className="font-red-hat font-medium text-[15px] leading-[18px] text-[#5A5B6A]">Nov 27, 1450 UTC</div></div></div>
      </div>
    </div>
  );
};

export default Card2;
