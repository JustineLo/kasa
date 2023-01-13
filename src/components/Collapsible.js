import React from "react";
import styles from "./Collapsible.module.css";
import chevronDown from "../assets/chevronDown.svg";

const Collapsible = ({ title, description }) => {
  return (
    <>
      <div className={styles.collapsible}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <img src={chevronDown} alt="chevron down" />
        </div>
      </div>
    </>
  );
};

export default Collapsible;
