import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ text }) => {
  return (
    <>
      <div className={styles.tag}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Tag;
