import React from "react";
import "./Header.scss";
import { FaHome } from "react-icons/fa";
import History from "../../Navigation/History";
import logo from "../../assets/images/zx-logo.png";

const Header = () => {
  return (
    <div>
      <div className="homepage-banner">
        <div className="overlay">
          <div className="content">
            <img src={logo} alt="header img" className="header-img" />
            <p className="header-text">ZX Trading</p>
            <p className="bar-icon" onClick={() => History.push("/")}>
              <FaHome />
              <span className="logo-desc">Make money!</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="header-bar">
        <div className="bar-content">
         
          <p className="bar-buttons" onClick={() => History.push("/contactus")}>
            Contact us
          </p>
          <p className="bar-buttons" onClick={() => History.push("/queries")}>
            Queries
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
