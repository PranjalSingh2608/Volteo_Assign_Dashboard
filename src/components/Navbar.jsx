import React from 'react';
import ship from '../assets/ship.png';
import power from '../assets/power.png';
const Navbar = () => {
  return (
    <div className="absolute w-[90%] h-[80px] bg-white shadow-sm rounded-lg flex items-center border border-gray-300 left-[8.4%] p">
      <div className="flex justify-between w-full">
        
        <div className="flex items-center ml-6">
          <img 
            src={ship}
           
            className="w-[31px] h-[31px] mr-3"
          />
          <div className="flex flex-col">
            <div className="font-red-hat font-medium text-[16px] leading-[24px] text-[#19191D]">
              Dev Vessel
            </div>
            <div className="font-red-hat font-normal text-[13px] leading-[20px] text-[#19191D]">
              16 Crew-mates · <span className="font-medium">O9 Active</span>
            </div>
          </div>
        </div>
        
       
        <div className="flex items-center mr-6">
          <span className="font-red-hat-text font-normal text-[14px] leading-[24px] text-[#19191D] mr-6  border border-gray-300 px-3 py-1 rounded-lg">
            GMT +09:00
          </span>
          <button className="w-[48px] h-[48px] bg-[#D8E6FF] rounded-full flex items-center justify-center">
            <img src={power} className='w-[24px] h-[24px]'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
