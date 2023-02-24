import React from "react";
// import "../styles/home.css";
import { Parallax } from "react-parallax";

const HomePage = () => {
  return (
    <Parallax
      bgImage="https://i.pinimg.com/736x/b4/73/75/b47375b6dad921a042f9d5ed16ee9353.jpg"
      bgImageAlt="background image"
      strength={200}
    ></Parallax>
  );
};

export default HomePage;
