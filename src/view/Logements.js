import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapsible from "../components/Collapsible";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import styles from "./Logements.module.css";

const Logements = () => {
  const location = useLocation();
  const logement = location.state.logement;
  const equipments = logement.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <section className={styles.logement}>
        {/* Carousel */}
        <Carousel pictures={logement.pictures} />

        {/* Information header */}
        <div className={styles.header}>
          <div className={styles.headerLeftSide}>
            <h1> {logement.title} </h1>
            <h2> {logement.location} </h2>
            <div className={styles.tagsContainer}>
              {logement.tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
          <div className={styles.headerRightSide}>
            <Rating rating={logement.rating} />
            <div className={styles.host}>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} />
            </div>
          </div>
        </div>

        {/* Description and equipment */}
        <div className={styles.collapsibles}>
          <Collapsible title="Description" description={logement.description} />
          <Collapsible title="Équipements" description={equipments} />
        </div>
      </section>
    </>
  );
};

export default Logements;
