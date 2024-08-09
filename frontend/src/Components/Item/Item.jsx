import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.jsx";
import "./Item.css";
import pr from "../../Assets/product_14.png";

const Item = (props) => {
  const { url } = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={pr} alt="" />
      </Link>
      <div className="item-info">
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">&#8377; {props.new_price}</div>
        <div className="item-price-old">&#8377; {props.old_price}</div>
      </div>
      </div>
    </div>
  );
};

export default Item;
