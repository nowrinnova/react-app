import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link className="action_container" to="">
          <IoMdPerson />
            <span className="action_name">Profile</span>
          </Link>

          <Link className="action_container">
          <FaHeart />
            <span className="action_name">Wishlist</span>
          </Link>

          <Link className="action_container" to="/bag">
          <IoBagHandle />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
