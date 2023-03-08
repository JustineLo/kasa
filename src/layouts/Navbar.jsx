import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/kasaLogo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          A propos
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
