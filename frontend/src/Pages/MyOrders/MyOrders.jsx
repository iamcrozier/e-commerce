import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { ShopContext } from "../../Context/ShopContext.jsx";
import axios from "axios";
import parcel_icon from "../../Assets/parcel_icon.png";

const MyOrders = () => {
  const { url, token } = useContext(ShopContext);
  const [data, setData] = useState([]);

  const fetchorders = async () => {
    const response = await axios.post(
      url + "/api/order/userorder",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchorders();
    }
  }, [token]);
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div className="my-orders-order">
              <img src={parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>&#8377;{order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
