import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import banner from "../assets/homeBanner.png";

const Home = () => {
  const bannerText = "Chez vous, partout et ailleurs";

  return (
    <>
      <Banner image={banner} text={bannerText} />
      <div>
        <h1>This is the home page</h1>
        <Link to="logements">Click to view our logements page</Link>
        <Link to="apropos">Click to view our contact page</Link>
      </div>
    </>
  );
};

export default Home;
