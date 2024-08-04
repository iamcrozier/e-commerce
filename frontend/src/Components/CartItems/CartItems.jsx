import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext.jsx";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("");
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>&#8377;{e.new_price}</p>
                <p className="cartitems-quantity">{cartItems[e.id]}</p>
                <p>&#8377;{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>&#8377;{getTotalCartAmount()}</h3>
            </div>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo-code" />
            <button>Submit</button>
          </div>
          <div className="cartitems-payment-methods">
            <div className="cartitems-payment-method">
              <input
                type="radio"
                name="paymentmethod"
                id="cod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handleChange}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="cartitems-payment-method">
              <input
                type="radio"
                name="paymentmethod"
                id="prepay"
                value="prepay"
                checked={paymentMethod === "prepay"}
                onChange={handleChange}
              />
              <label htmlFor="prepay">Pre Payment</label>
            </div>
          </div>
          <button className="proceed-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItems;
