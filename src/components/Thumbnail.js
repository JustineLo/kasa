import React from "react";
import styles from "./Thumbnail.module.css";
import { useNavigate } from "react-router-dom";

const Thumbnail = ({ logement }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className={styles.thumbnail}
        onClick={() =>
          navigate("/logements", { state: { logement: logement } })
        }
      >
        <img src={logement.cover} alt={logement.title} />
        <h1>{logement.title}</h1>
      </button>
    </>
  );
};

export default Thumbnail;
