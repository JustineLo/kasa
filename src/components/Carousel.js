import React from "react";
import Banner from "./Banner";
import styles from "./Carousel.module.css";
import chevronRight from "../assets/chevronRight.svg";
import chevronLeft from "../assets/chevronLeft.svg";

const Carousel = ({ pictures }) => {
  return (
    <>
      <div className={styles.carousel}>
        <Banner image={pictures[1]} carousel={true} />
        <button className={styles.chevronleft}>
          <img src={chevronLeft} alt="chevron left" />
        </button>
        <button className={styles.chevronright}>
          <img src={chevronRight} alt="chevron right" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
