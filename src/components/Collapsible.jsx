import React, { useState } from "react";
import styles from "./Collapsible.module.css";
import chevronDown from "../assets/chevronDown.svg";

const Collapsible = ({ title, children, flexHeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.collapsible} onClick={handleClick}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <img style={{transform: isOpen && `rotate(180deg)`}} src={chevronDown} alt="chevron down" />
        </div>
        <div
          className={styles.description}
          style={{
            display: isOpen ? "flex" : "none",
            height: flexHeight && "fit-content",
            padding: flexHeight && "36px 18px",
          }}
        >
          {children}
        </div>
      </button>
    </>
  );
};

export default Collapsible;
