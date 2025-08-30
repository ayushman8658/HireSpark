import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import Latesjobs from "./Latesjobs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <Categories />
      <Latesjobs />
      <Footer />
    </div>
  );
};

export default Home;
