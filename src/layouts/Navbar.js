import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../assets/kasaLogo.svg";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar__links">
          <Link to="/logements">Logements</Link>
          <Link to="/apropos">A propos</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
