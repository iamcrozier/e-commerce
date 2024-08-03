import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
import { json } from "react-router-dom";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "T-Shirt",
    description: "",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (event) => {
    setImage(event.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "post",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/api/product/addproduct", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
          if (data.success) {
            setProductDetails({
              name: "",
              image: "",
              category: "T-Shirt",
              description: "",
              new_price: "",
              old_price: "",
            });
            window.location.reload();
          }
        });
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Prodct Title</p>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={productDetails.name}
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Prodct Desciption</p>
        <textarea
          type="text"
          onChange={changeHandler}
          name="description"
          value={productDetails.description}
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="old_price"
            onChange={changeHandler}
            value={productDetails.old_price}
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            name="new_price"
            onChange={changeHandler}
            value={productDetails.new_price}
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>product Category</p>
        <select
          name="category"
          className="addproduct-selector"
          onChange={changeHandler}
          value={productDetails.category}
        >
          <option value="T-Shirt">T-Shirt</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={() => Add_Product()} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
