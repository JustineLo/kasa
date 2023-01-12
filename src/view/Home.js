import React from "react";
import Banner from "../components/Banner";
import banner from "../assets/homeBanner.png";
import logements from "./../logements.json";
import Thumbnail from "../components/Thumbnail";

const Home = () => {
  const bannerText = "Chez vous, partout et ailleurs";

  return (
    <>
      <Banner image={banner} text={bannerText} />
      <div className="logements-container">
        {logements.map((logement) => (
          <Thumbnail
            key={logement.id}
            image={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
