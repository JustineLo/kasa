import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import banner from "../assets/homeBanner.png";
import logements from "./../logements.json";
import Thumbnail from "../components/Thumbnail";

const Home = () => {
  const bannerText = "Chez vous, partout et ailleurs";
  // const [logements, setLogements] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [err, setErr] = useState(false);

  // useEffect(() => {
  //   fetch("../logements.json")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       setLogements([]);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setErr(true);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (err) return <div>{err}</div>;

  // if (isLoading) return <div>Chargement...</div>;

  return (
    <>
      <Banner image={banner} text={bannerText} />
      <div className="logements-container">
        {logements.map((logement) => (
          <Thumbnail
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
