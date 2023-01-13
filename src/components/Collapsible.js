import React from "react";
import styles from "./Collapsible.module.css";
import chevronDown from "../assets/chevronDown.svg";

const Collapsible = ({ title, description }) => {
  return (
    <>
      <button className={styles.collapsible}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <img src={chevronDown} alt="chevron down" />
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </button>
    </>
  );
};

export default Collapsible;
