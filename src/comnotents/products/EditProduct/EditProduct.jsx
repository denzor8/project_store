import React, { useState, useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./EditProduct.css";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Parallax
      bgImage="https://img.freepik.com/free-photo/abstract-extruded-voronoi-blocks-background-minimal-light-clean-corporate-wall-3d-geometric-surface-illustration-polygonal-elements-displacement_1217-2503.jpg"
      bgImageAlt="background image"
      strength={50}
      style={{ height: "92vh" }}
    >
      {product ? (
        <div className="container1">
          <form id="contact1" action="" method="post">
            <h3>Edit Product</h3>
            <fieldset>
              <input
                type="text"
                placeholder="Title"
                name="name"
                onChange={handleInp}
                value={product.name}
                tabIndex="1"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <input
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleInp}
                value={product.description}
                tabIndex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleInp}
                value={product.price}
                tabIndex="3"
                required
              />
            </fieldset>
            <fieldset>
              <input
                type="text"
                placeholder="Picture"
                name="picture"
                onChange={handleInp}
                value={product.picture}
                tabIndex="4"
                required
              />
            </fieldset>
            <fieldset>
              <input
                type="text"
                placeholder="Type"
                name="type"
                onChange={handleInp}
                value={product.type}
                tabIndex="5"
                required
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                onClick={() => {
                  saveEditedProduct(product);
                  navigate("/products");
                }}
              >
                Save Changes
              </button>
            </fieldset>
          </form>
        </div>
      ) : (
        <h3>Loading..</h3>
      )}
    </Parallax>
  );
};

export default EditProduct;
