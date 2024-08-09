import React from "react";
import "./Footer.css";
import footer_logo from "../../Assets/Crozier.png";
import email_icon from "../../Assets/email_icon.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={footer_logo} alt="" />
          <p>
            {" "}
            At Crozier, we believe that a T-shirt is more than just a piece of
            clothing—it's a canvas for self-expression, creativity, and
            individuality. Our mission is to bring you the best in unique,
            high-quality T-shirts that reflect your personality and style
          </p>
          <div className="footer-social-icons">
            <img src={instagram_icon} alt="" />
            <a href="mailto:customercare.crozier@gmail.com">
              <img src={email_icon} alt="" />
            </a>
            <a href="https://wa.me/8848288578" target="_blank">
              <img src={whatsapp_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link onClick={scrollToTop} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/about"}>
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/"}>
                Delivery
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to={"/"}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8848288578</li>
            <li>customercare.crozier@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ crozier.in - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
