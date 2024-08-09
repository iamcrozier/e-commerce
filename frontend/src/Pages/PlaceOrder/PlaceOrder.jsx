import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios, { getAdapter } from "axios";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    token,
    all_product,
    cartItem,
    url,
    frontend_url,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    contry: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async (event) => {
    event.preventDefault();
    let orderitems = [];
    all_product.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderitems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderitems,
      paymentType: paymentMethod,
      amount: getTotalCartAmount() + 2,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: {
        token: token,
      },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      console.log(session_url);
      //navigate(session_url);
      window.location.replace(frontend_url + session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            type="text"
            name="firstName"
            onChange={onChangehandler}
            value={data.firstName}
            id=""
            placeholder="First name"
          />
          <input
            required
            type="text"
            name="lastName"
            onChange={onChangehandler}
            value={data.lastName}
            placeholder="Last name"
          />
        </div>
        <input
          required
          type="email"
          name="email"
          onChange={onChangehandler}
          value={data.emial}
          placeholder="Email address"
        />
        <input
          required
          type="text"
          name="street"
          onChange={onChangehandler}
          value={data.street}
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            type="text"
            name="city"
            onChange={onChangehandler}
            value={data.city}
            id=""
            placeholder="City"
          />
          <input
            required
            type="text"
            name="state"
            onChange={onChangehandler}
            value={data.state}
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            type="text"
            name="zipcode"
            onChange={onChangehandler}
            value={data.zipcode}
            placeholder="Zip code"
          />
          <input
            required
            type="text"
            name="contry"
            onChange={onChangehandler}
            value={data.contry}
            placeholder="Country"
          />
        </div>
        <input required type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-totoal-details">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-totoal-details">
              <p>Delivery Fee</p>
              <p>&#8377;{getTotalCartAmount() == 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-totoal-details">
              <b>Total</b>
              <b>
                &#8377;
                {getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          {/*  */}
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
          {/*  */}
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
