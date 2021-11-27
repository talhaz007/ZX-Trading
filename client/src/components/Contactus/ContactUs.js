import React from "react";
import Footer from "../Footer/Footer";
import {
  FaMailBulk,
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import Header from "../Header/Header";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="default-layout">
      <Header />
      <div className="container">
        <div className="contact-wrap-div">
          <h1>ContactUs</h1>
          <div className="contact-border"></div>
        </div>
        <div className="contacts-wrapper">
          <div className="contact-icon-wraps">
            <FaMailBulk className="contact-icon" />
            <p></p>
            <h3>Mail Us</h3>
          </div>
          <div className="contact-icon-wraps">
            <FaInstagram className="contact-icon" />
            <p></p>
            <h3>
              Follow us on <br></br> Instagram
            </h3>
          </div>
          <div className="contact-icon-wraps">
            <FaFacebookSquare className="contact-icon" />
            <p></p>
            <h3>
              Find us on <br></br> Facebook
            </h3>
          </div>
          <div className="contact-icon-wraps">
            <FaPhone className="contact-icon" />
            <p></p>
            <h3>Call us at</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
