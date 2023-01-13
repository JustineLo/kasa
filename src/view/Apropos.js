import React from "react";
import Banner from "../components/Banner";
import banner from "../assets/aproposBanner.png";
import Collapsible from "../components/Collapsible";

const Apropos = () => {
  return (
    <>
      <Banner image={banner} />
      <div className="apropos-container">
        <Collapsible />
      </div>
    </>
  );
};

export default Apropos;
