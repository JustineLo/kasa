import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";

const Logements = ({ state }) => {
  const location = useLocation();
  const logement = location.state.logement;
  return (
    <>
      <Carousel pictures={logement.pictures} />
    </>
  );
};

export default Logements;
