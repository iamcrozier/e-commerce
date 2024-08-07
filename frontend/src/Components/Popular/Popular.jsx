import React, { useContext, useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext.jsx";

const Popular = () => {
  const { url } = useContext(ShopContext);
  const [data_product, setData_product] = useState([]);
  useEffect(() => {
    fetch(url + "/api/collection/popular")
      .then((res) => res.json())
      .then((data) => {
        setData_product(data);
      });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
