import React, { useState } from "react";
import styles from "./Collapsible.module.css";
import chevronDown from "../assets/chevronDown.svg";

const Collapsible = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.collapsible} onClick={handleClick}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <img src={chevronDown} alt="chevron down" />
        </div>
        <div
          className={styles.description}
          style={{ display: isOpen ? "block" : "none" }}
        >
          {children}
        </div>
      </button>
    </>
  );
};

export default Collapsible;
