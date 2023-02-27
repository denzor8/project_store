import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination/";

const ProductList = ({ changeSideBarStatus, page, setPage }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 8;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  }
  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Products List</h3>
      <button onClick={changeSideBarStatus}> Filter&Search Menu</button>
      <div className="posts-list">

        {products ? (
          currentData().map(item => (
            <ProductCard key={item.id} item={item} />
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Pagination className="pagination" count={count} page={page} onChange={handlePage} />
    </div>
  );
};

export default ProductList;
