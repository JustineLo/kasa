import React from "react";
import { useLocation } from "react-router-dom";

const Logements = ({ state }) => {
  const location = useLocation();
  return <>{location.state.logement.title}</>;
};

export default Logements;
