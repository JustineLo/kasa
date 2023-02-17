import React from "react";
import styles from "./Thumbnail.module.css";
import { Link } from "react-router-dom";

const Thumbnail = ({ id, cover, title }) => {
  return (
    <>
      <Link to={`/logements/${id}`} className={styles.thumbnail}>
        <img src={cover} alt={title} />
        <div className={styles.overlay}></div>
        <h1>{title}</h1>
      </Link>
    </>
  );
};

export default Thumbnail;
