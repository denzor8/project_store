import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";

const AddProduct = () => {
  const navigate = useNavigate();

  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

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
    <div>
      <h2>Add Product</h2>

      <input type="text" placeholder="Name" name="name" onChange={handleInp} />
      <br />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleInp}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        name="price"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Image"
        name="picture"
        onChange={handleInp}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        name="type"
        onChange={handleInp}
      />
      <br />
      <button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddProduct;
