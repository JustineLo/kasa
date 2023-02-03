import React from "react";
import styles from "./Thumbnail.module.css";
import { useNavigate } from "react-router-dom";

const Thumbnail = ({ id, cover, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className={styles.thumbnail}
        onClick={() =>
          navigate("/logements/" + id)}
      >
        <img src={cover} alt={title} />
        <h1>{title}</h1>
      </button>
    </>
  );
};

export default Thumbnail;
