import React, { useState, useEffect, useContext } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item.jsx";
import { ShopContext } from "../../Context/ShopContext.jsx";

const RelatedProducts = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { url } = useContext(ShopContext);

  useEffect(() => {
    fetch(url + "/api/collection/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data);
      });
  }, []);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProduct.map((item, index) => {
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

export default RelatedProducts;
