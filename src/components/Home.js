import React from 'react';
import Header from '../components/Header'; // Adjust the path based on your file structure
import Main from '../components/Main';
import Footer from '../components/Footer';
import './Home.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="full-page">
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default HomePage;
