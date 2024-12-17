import React from "react";
import refresh from "../assets/refresh.png";
import attach from "../assets/attach.png";
import eye from "../assets/eye.png";

const ImportantNoticeCard = ({ title, eyeCount, onRead }) => (
  <div className="card1 flex flex-col bg-[#FFFAEC] my-3 rounded-[12px]">
    <div className="flex justify-between my-2">
      <div className="text-[#E95454] text-[12px] font-medium mx-4">important notice</div>
      <img src={attach} className="w-[14px] h-[14px] mr-3 my-2" alt="Attach" />
    </div>
    <div className="title font-red-hat font-medium text-[16px] leading-[20px] text-[#133774] mx-4">
      {title}
    </div>
    <div className="flex justify-between my-2">
      <div className="flex items-center mx-4">
        <img src={eye} className="w-[20px] h-[20px] mr-2" alt="Eye" />
        <div className="text-[#19191D] text-[14px] font-medium">{eyeCount}</div>
      </div>
      <button
        onClick={onRead}
        className="bg-[#E95454] p-10 text-white font-semibold py-2 px-4 rounded-[99px] text-[10px] mr-4 w-[90px] tracking-wider font-inter"
      >
        READ
      </button>
    </div>
  </div>
);

const ActivityCard = ({ name, description, timestamp }) => (
  <div className="Card2 bg-white flex flex-col p-6 rounded-[12px] my-6">
    <div className="text-[#213838] text-[16px] font-bold mx-4">
      {name} <span className="font-red-hat font-normal text-[16px] leading-[20px] text-[#213838]">{description}</span>
    </div>
    <div className="text-[#5A5B6A] text-[12px] font-bold self-end">{timestamp}</div>
  </div>
);

const Card3 = () => {
  const importantNotice = {
    title: "Captain's Bridge Order dated Nov 27, 2020",
    eyeCount: 1,
    onRead: () => alert("Read Button Clicked!"), 
  };

  const activityUpdates = [
    {
      name: "Second Officer Oliver",
      description: "submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist",
      timestamp: "UTC 1105 | LT +06:30",
    },
    {
      name: "Third Engineer Edward",
      description: "submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist",
      timestamp: "UTC 1055 | LT +06:30",
    },
  ];

  return (
    <div className="absolute w-[33%] h-[84%] bg-[#EBF4FF] shadow-[0px_0px_1px_rgba(40,41,61,0.48)] rounded-[12px] p-4 left-[36%] top-[14%] flex flex-col">
      <div className="h-[22px] text-black font-medium text-[12px] leading-[22px] tracking-[0.2px] flex justify-between my-2 ml-4">
        <div className="font-red-hat text-black font-bold text-[20px] flex flex-col">
          <div className="font-red-hat font-bold text-[20px] leading-[36px] text-[#133774]">Daily Stream</div>
          <div className="font-red-hat font-medium text-[14px] leading-[20px] text-[#5A5B6A]">Last updated - 4 minutes ago</div>
          
          <div className="flex flex-col w-[100%]">
            {/* Important Notice Card */}
            <ImportantNoticeCard {...importantNotice} />
            
            {/* Activity Update Cards */}
            {activityUpdates.map((update, index) => (
              <ActivityCard key={index} {...update} />
            ))}
            <div className="Card2 bg-white flex flex-col p-6 rounded-[12px] h-[200px]" />
          </div>
        </div>
        <img src={refresh} className="w-[14px] h-[14px] my-2" alt="Refresh" />
      </div>
    </div>
  );
};

export default Card3;
