import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./comnotents/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
  );
};

export default App;
