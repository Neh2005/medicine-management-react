// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <div id="header">
      <video autoPlay muted loop id="bg-video">
        <source src="https://v.ftcdn.net/04/88/80/33/700_F_488803354_DJzBb1Z5qPgpCUypYxNUDLzhoZiZch9K_ST.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Hi. Welcome To Medico.</h1>
        <p>
          Welcome to the Medicine Management System, your comprehensive online solution for organizing and managing medicine information.
          This intuitive platform is designed to streamline the process of keeping track of your medication records, making it easy to add, update, and delete medicine details.
        </p>
      </div>
    </div>
  );
}

export default Header;
