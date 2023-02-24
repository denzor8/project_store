import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination/";

const ProductList = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(1);

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
    <>
      <h3 style={{ textAlign: "center" }}>Products List</h3>
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
    </>
  );
};

export default ProductList;
