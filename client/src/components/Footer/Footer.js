import React from "react";
import footerBackground from "../../assets/images/stock.jpg";
import History from "../../Navigation/History";
import "./Footer.scss";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <img src={footerBackground} className="footer-bg-image" alt="footer" />
      <div className="overlay" />
      <footer className="footer-wrapper">
        <div className="top">
          <div className="logo-wrapper">
            <h2>Zx Trading</h2>
          </div>
          <div className="desktop">
            <div className="links-wrapper">
              <div className="block left">
                <p style={{ color: "white", fontSize: "14px" }}>Address :</p>
                <address style={{ color: "lightgray", fontSize: "12px" }}>
                  Cv5 7fp 14 Orchards drive Coventry England
                </address>
              </div>
              <div className="block middle">
                <a href="#" onClick={() => History.push("/queries")}>
                  Queries
                </a>
                <a href="#" onClick={() => History.push("/ibregister")}>
                  Register as IB
                </a>
                <a href="#" onClick={() => History.push("/clientregister")}>
                  Register as Client
                </a>
              </div>
              <div className="block right">
                <a href="#" onClick={() => History.push("/")}>
                  About Us
                </a>
                <a href="#" onClick={() => History.push("/contactus")}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="links-wrapper">
              <div className="block">
                <a href="#" onClick={() => History.push("/")}>
                  About Us
                </a>
                <a>Address</a>
                <a>
                  Cv5 7fp 14 Orchards drive <br></br>Coventry England
                </a>
              </div>
              <div className="block">
                <a href="#" onClick={() => History.push("/contactus")}>
                  Contact Us
                </a>
                <a href="#" onClick={() => History.push("/queries")}>
                  Queries
                </a>
                <a href="#" onClick={() => History.push("/ibregister")}>
                  Register as IB
                </a>
                <a href="#" onClick={() => History.push("/clientregister")}>
                  Register as Client
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="separator-wrapper"></div>
        <div className="bottom">
          <div className="right-reserved-text">
            © 2021 Zx Trading – All rights reserved
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
