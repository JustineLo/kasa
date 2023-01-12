import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ image, text }) => {
  return (
    <>
      <div className={styles.banner}>
        <img src={image} alt="home banner" />
        <h1>{text}</h1>
      </div>
    </>
  );
};

export default Banner;
