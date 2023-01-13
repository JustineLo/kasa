import React from "react";
import Banner from "../components/Banner";
import banner from "../assets/aproposBanner.png";

const Apropos = () => {
  return (
    <>
      <Banner image={banner} />
      <div className="apropos-container"></div>
    </>
  );
};

export default Apropos;
