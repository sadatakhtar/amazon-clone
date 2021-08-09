import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt='logo'
      />
      <div className='header_search'>
        <input type="text" placeholder="Search" />
        {/* searchIcon */}
      </div>
      <div className='header_nav'>
          <div className='header_options'></div>
          <div className='header_options'></div>
          <div className='header_options'></div>

      </div>
    </div>
  );
}

export default Header;
