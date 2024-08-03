import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/api/product/allproducts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllProducts(data);
        } else {
          console.error("Expected an array but received:", data);
        }
      });
  };

  const removeproduct = async (id) => {
    console.log("clicked");
    await fetch("http://localhost:4000/api/product/removeproduct", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((rep) => rep.json())
      .then((dat) => {
        console.log(dat);
      });
    await fetchInfo();
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="listproduct">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img src={product.image} className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    removeproduct(product.id);
                  }}
                  src={cross_icon}
                  alt=""
                  className="listproduct-remove-icon"
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
