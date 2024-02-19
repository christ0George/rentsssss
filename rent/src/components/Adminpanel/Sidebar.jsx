import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
       
       <ul>
        
        <a href='/c'><li>Add Carss</li></a>
       </ul>
      
       <ul>
       <a href="/sview"><li>Added Cars</li></a>
       
      
      </ul>
      
    </div>
  );
};

export default Sidebar;