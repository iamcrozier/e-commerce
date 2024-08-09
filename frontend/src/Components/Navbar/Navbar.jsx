import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Crozier.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown_icon from "../../Assets/nav_dropdown_icon.png";
import profile_icon from "../../Assets/profile_icon.png";
import bag_icon from "../../Assets/bag_icon.png";
import logout_icon from "../../Assets/logout_icon.png";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems, token, setToken } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img onClick={() => navigate("/")} src={logo} alt="" />
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
        {token ? (
          <div className="navbar-profile">
            <img src={profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={bag_icon} alt="" />
                <p>Order</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
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
