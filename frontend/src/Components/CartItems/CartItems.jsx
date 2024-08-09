import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext.jsx";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const navigate = useNavigate();

  const { all_product, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

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
      {all_product.map((e, index) => {
        if (cartItem[e._id] > 0) {
          return (
            <div>
              <div
                key={index}
                className="cartitems-format cartitems-format-main"
              >
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>&#8377;{e.new_price}</p>
                <p className="cartitems-quantity">{cartItem[e._id]}</p>
                <p>&#8377;{e.new_price * cartItem[e._id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e._id);
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
              <p>Subtotal </p>
              <p> &#8377;{getTotalCartAmount()}</p>
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

          <button onClick={() => navigate("/order")} className="proceed-btns">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItems;
