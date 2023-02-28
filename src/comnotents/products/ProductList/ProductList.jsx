import React, { useEffect, useState } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import "./ProductList.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ProductList = ({ changeSideBarStatus, page, setPage }) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 8;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f1f8e9",
      },
      secondary: {
        main: "#7c4dff",
      },
    },
  });

  return (
    <div className="images">
      <h3 style={{ textAlign: "center", marginBottom: "0" }}>Products List</h3>
      <button className="custom-btn btn-3" onClick={changeSideBarStatus}>
        <span>Filter&Search Menu</span>
      </button>
      <div className="posts-list">
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <ThemeProvider theme={theme}>
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
          color="secondary"
          className="pagination2"
        />
      </ThemeProvider>
    </div>
  );
};

export default ProductList;
