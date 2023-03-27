import React from 'react';
import './footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation(); // Get the location object

  // Check if the current path is '/overview' or '/ws-project'
  const isSpecialPage = location.pathname === '/overview' || location.pathname === '/ws-project';

  return (
    <footer className={`footer-container px-32 text-copyright relative overflow-hidden ${isSpecialPage ? 'pt-72' : ''}`}>

    <div className="footer-content w-full mb-8 mt-32">
      <div className="grid grid-cols-2 h-full">
        <div className="grid grid-cols-2 grid-rows-2 h-full col-span-1">
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="src\assets\footer\mail-icon.svg" alt="email_icon" className="mr-4" /><p className="font-medium">Email</p></span>
            <p><a href="mailto:info@riominerals.com">info@riominerals.com</a></p>
          </div>
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="src\assets\footer\location-icon.svg" alt="location_icon" className="mr-4" /><p className="font-medium">Business Address</p></span>
            <p><a href="https://goo.gl/maps/6nH9b1mp92wckqCy9">
              Unit 615 – 800 West Pender St.<br></br>
              Vancouver, BC<br></br>
              V6C 2V6
            </a></p>
          </div>
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="src\assets\footer\phone-icon.svg" alt="phone_icon" className="mr-4" /><p className="font-medium">Phone Number</p></span>
            <p><a href="tel:+16046712245">+1 (604)-671-2245</a></p>          
          </div>
          <div className="flex-row items-center p-4 space-y-4">
            <span className="flex"><img src="src\assets\footer\location-icon.svg" alt="location_icon" className="mr-4" /><p className="font-medium">Registered Office Address</p></span>
            <p><a href="https://goo.gl/maps/6nH9b1mp92wckqCy9">
              Unit 615 – 800 West Pender St.<br></br>
              Vancouver, BC<br></br>
              V6C 2V6
            </a></p>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
    
    <div className="footer-images">
      <div className={`gradient-gray absolute ${isSpecialPage ? 'top-[20%]' : 'top-0'} left-1/2 h-4/5 w-1/4 scale-150`}></div>
      <div className={`gradient-gold absolute ${isSpecialPage ? 'top-[45%]' : 'top-[25%]'} left-3/4 h-4/5 w-1/4 scale-150`}></div>

      <img className={`absolute ${isSpecialPage ? 'top-[52%]' : 'top-[25%]'} left-2-3-minus-100px`} src="src\assets\footer\footer-circle.svg" alt="" />
      <img className={`absolute ${isSpecialPage ? 'top-[45%]' : 'top-[15%]'} left-2-3-minus-125px`} src="src\assets\footer\footer-rock-sm.png" alt="" />
      <img className={`absolute ${isSpecialPage ? 'top-[55%]' : 'top-[30%]'} left-2-3-plus-40px`} src="src\assets\footer\footer-rock-lg.png" alt="" />
    </div>


    <div className="footer-copyright w-full my-16">
      <div className="flex justify-between items-center">
        <Link to="/" className="nav-logo flex h-7 items-center w-[265px]">
          <img src="src/assets/logo/ws-icon.svg" alt="icon" className="w-[55px]" />
          <img src="src/assets/logo/ws-logo.svg" alt="logo" className="w-[210px] h-[24px]" />
        </Link>
        <p className="opacity-50">&copy; Copyright {new Date().getFullYear()} Western Star Resources Inc.</p>      
      </div>
    </div>
  </footer>

  );
};

export default Footer;
 