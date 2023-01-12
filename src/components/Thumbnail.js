import React from "react";
import styles from "./Thumbnail.module.css";

const Thumbnail = ({ image, title }) => {
  return (
    <>
      <div className={styles.thumbnail}>
        <img src={image} alt={title} />
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Thumbnail;
