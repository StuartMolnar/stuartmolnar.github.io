import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/Layout.css';

const Layout = ({ children, setNavbarHeight }) => {
  return (
    <div className="layout-container">
      <Navbar setNavbarHeight={setNavbarHeight} />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};


export default Layout;
