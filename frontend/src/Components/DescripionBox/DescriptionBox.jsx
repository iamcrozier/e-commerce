import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = (props) => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (0)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {props.product.description}
          
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default DescriptionBox;
