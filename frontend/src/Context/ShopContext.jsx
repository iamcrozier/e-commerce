import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const url = "http://localhost:4001";
  const frontend_url = "http://localhost:5173";

  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState("");
  const [all_product, setAll_product] = useState([]);

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/getcart",
      {},
      {
        headers: { token },
      }
    );
    setCartItem(response.data.data);
  };

  const fetchProductList = async () => {
    const response = await axios.get(url + "/api/product/allproducts");
    setAll_product(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchProductList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }

    loadData();
  }, []);

  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      const status = await axios.post(
        url + "/api/cart/addtocart",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      const res = await axios.post(
        url + "/api/cart/removefromcart",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find((product) => product._id === item);
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalNum = 0;
    Object.keys(cartItem).forEach((itemKey) => {
      if (cartItem[itemKey] > 0) {
        totalNum += 1;
      }
    });
    return totalNum;
  };

  const contextValue = {
    token,
    setToken,
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    url,
    frontend_url,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
