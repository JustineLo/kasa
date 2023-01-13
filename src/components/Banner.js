import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ image, text, carousel }) => {
  return (
    <>
      <div className={`${styles.banner} ${carousel ? styles.carousel : ""}`}>
        <img src={image} alt="home banner" />
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default Banner;
