import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header_search">
        <input type="text" placeholder="Search" />
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className="header_nav">
        <div className="header_options">
          <span className="header_option_lineOne">Hello Guest</span>
          <span className='header_option_lineOne'>Sign In</span>
        </div>
        <div className="header_options">
          <span className="header_option_lineOne">Returns</span>
          <span className='header_option_lineOne'>& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineOne">Prime</span>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
