import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import men_banner from "./Components/Assets/banner_mens.png";
import Cart from "./Pages/Cart.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/t-shirts"
          element={<ShopCategory banner={men_banner} category="T-Shirt" />}
        />
        <Route path="/contact" element={<Contact />} />

        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
