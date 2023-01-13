import React, { useState } from "react";
import Banner from "./Banner";
import styles from "./Carousel.module.css";
import chevronRight from "../assets/chevronRight.svg";
import chevronLeft from "../assets/chevronLeft.svg";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className={styles.carousel}>
        <Banner image={pictures[currentIndex]} carousel={true} />
        <button className={styles.chevronleft} onClick={handlePrevious}>
          <img src={chevronLeft} alt="chevron left" />
        </button>
        <button className={styles.chevronright} onClick={handleNext}>
          <img src={chevronRight} alt="chevron right" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
