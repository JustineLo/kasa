import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../assets/footerLogo.svg";

const Footer = () => {
  const text = "© 2020 Kasa. All rights reserved";

  return (
    <footer className={styles.footer}>
      <Logo />
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
