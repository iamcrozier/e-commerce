import React, { useContext, useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext.jsx";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  const { url } = useContext(ShopContext);

  useEffect(() => {
    fetch(url + "/api/collection/newcollections")
      .then((res) => res.json())
      .then((data) => {
        setNew_collection(data);
      });
  }, []);
  return (
    <div id="newcollection" className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
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

export default NewCollections;
