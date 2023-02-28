import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "./ProductDetails.css";
import { Parallax } from "react-parallax";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <Parallax
      bgImage="https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg"
      bgImageAlt="background image"
      strength={150}
      blur={1}
    >
      <div className="product-details-container">
        {productDetails ? (
          <>
            <div className="product-details-image-container">
              <img
                src={productDetails.picture}
                alt=""
                className="product-details-image"
              />
            </div>
            <div className="product-details-info-container">
              <h3 className="product-details-name">{productDetails.name}</h3>
              <p className="product-details-description">
                {productDetails.description}
              </p>
              <p className="product-details-price">${productDetails.price}</p>
              <p className="product-details-price">
                Category: {productDetails.type}
              </p>
            </div>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </Parallax>
  );
};

export default ProductDetails;
