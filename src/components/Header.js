import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_options">
          <span className="header_option_lineOne">Hello Guest</span>
          <span className="header_option_lineTwo">Sign In</span>
        </div>
        <div className="header_options">
          <span className="header_option_lineOne">Returns</span>
          <span className="header_option_lineTwo">& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_option_lineOne">Your</span>
          <span className="header_option_lineTwo">Prime</span>
        </div>
        <div className='header_optionBasket'>
          <Link to='/checkout'>
            <ShoppingBasketIcon className="header_basketIcon"/>
          </Link>
         
          <span className='header_option_lineTwo header_basketCount'>0</span>

        </div>


      </div>

    </div>
  );
}

export default Header;
