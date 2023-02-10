import React from "react";
import Banner from "../components/Banner";
import banner from "../assets/aproposBanner.png";
import Collapsible from "../components/Collapsible";
import values from "./../apropos.json";

const Apropos = () => {
  return (
    <>
      <Banner image={banner} apropos={true} />
      <div className="apropos-container">
        {values.map((value) => (
          <Collapsible key={value.id} title={value.title} flexHeight={true}>
            <p>{value.description}</p>
          </Collapsible>
        ))}
      </div>
    </>
  );
};

export default Apropos;
