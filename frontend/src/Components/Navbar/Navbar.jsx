import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Crozier.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown_icon from "../../Assets/nav_dropdown_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p></p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown_icon}
        width="64"
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("t-shirt")}>
          <Link style={{ textDecoration: "none" }} to="/t-shirts">
            T-Shirts
          </Link>
          {menu === "t-shirt" ? <hr /> : <></>}
        </li>

        {/* <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li> */}
        <li onClick={() => setMenu("contact")}>
          <Link style={{ textDecoration: "none" }} to="/contact">
            Contact
          </Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: "none" }} to="/about">
            About Us
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            className="nav-login-btn"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            <button>Login</button>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
