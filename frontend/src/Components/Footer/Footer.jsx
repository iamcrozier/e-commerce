import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Crozier.png";
import instagram_icon from "../Assets/instagram_icon.png";
import email_icon from "../Assets/email_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        {/* <p></p> */}
      </div>
      <ul className="footer-links">
        {/* <li>Company</li>
        <li>Products</li>
        <li>Offices</li> */}
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </ul>

      <div className="footer-social-icon">
        {/* <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div> */}
        <div className="footer-icons-container">
          <a href="mailto:customercare.crozier@gmail.com">
            <img src={email_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://wa.me/8848288578" target="_blank">
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
