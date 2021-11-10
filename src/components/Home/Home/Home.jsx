import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import TopModels from "../TopModels/TopModels";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Products />
      <TopModels />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
