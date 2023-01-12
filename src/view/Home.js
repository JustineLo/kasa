import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>This is the home page</h1>
        <Link to="logements">Click to view our logements page</Link>
        <Link to="apropos">Click to view our contact page</Link>
      </div>
    </>
  );
};

export default Home;
