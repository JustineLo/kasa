import React, { useState } from "react";
import styles from "./Rating.module.css";
import pinkStar from "../assets/pinkStar.svg";
import greyStar from "../assets/greyStar.svg";

const Rating = ({ rating }) => {
  const nb = Number(rating);
  let stars = [];

  for (let i = 0; i < nb; i++) {
    stars.push(pinkStar);
  }
  for (let i = nb; i < 5; i++) {
    stars.push(greyStar);
  }

  return (
    <div>
      {stars.map((star, index) => (
        <img src={star} alt="pink star" key={index} className={styles.star} />
      ))}
    </div>
  );
};

export default Rating;
