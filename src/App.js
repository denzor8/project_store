import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./comnotents/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </ProductContextProvider>
  );
};

export default App;
