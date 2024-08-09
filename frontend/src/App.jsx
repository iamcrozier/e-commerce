import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.jsx";
import ShopCategory from "./Pages/Shopcategory/ShopCategory.jsx";
import Product from "./Pages/Product/Product.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_banner from "./Assets/banner_mens.png";
import Cart from "./Pages/Cart/Cart.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import Verify from "./Pages/Verify/Verify.jsx";
import MyOrders from "./Pages/MyOrders/MyOrders.jsx";
import LoginPopup from "./Components/LoginPopup/LoginPopup.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/t-shirts"
          element={<ShopCategory banner={men_banner} category="T-Shirt" />}
        />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
