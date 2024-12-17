import React from 'react';
import home from '../assets/home.png';
import workspace from '../assets/workspace.png';
import marpol from '../assets/maprol.png';
import heart from '../assets/heart.png';
import pie from '../assets/pie.png';
import history from '../assets/clock.png';
import apps from '../assets/app.png';
import cog from '../assets/cog.png';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: home, active: true },
    { name: 'Workspace', icon: workspace },
    { name: 'MARPOL', icon: marpol },
    { name: 'OH&S', icon: heart },
    { name: 'Insights', icon: pie },
    { name: 'History', icon: history },
    { name: 'Apps', icon: apps },
    { name: 'Settings', icon: cog },
  ];

  return (
    <div className="absolute bg-white shadow-sm rounded-lg border border-gray-300 w-[7%] h-[91%] flex flex-col items-center py-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center mb-4 relative px-4 py-3 rounded-md transition duration-300 ease-in-out w-[100px] ${
            item.active ? 'text-blue-500' : 'text-gray-700'
          } hover:bg-blue-100 hover:text-gray-900`}
        >
          <img src={item.icon} alt={item.name} className="w-[25px] h-[24px] mb-1" />
          <span className="text-grey-900 text-xs flex items-center text-center tracking-wide font-red-hat">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
