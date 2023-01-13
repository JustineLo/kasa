import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
