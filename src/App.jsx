// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import Main from './components/Main';
const App = () => {
  return (
    <div className="flex align-items-center">
      <Navbar/>
      <Sidebar />
    <Main/>
      {/* Other components */}
     
    </div>
  );
};

export default App;


