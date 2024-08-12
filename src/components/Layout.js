// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';  // Assuming Navbar is part of the common template
 

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      
    </div>
  );
}

export default Layout;
