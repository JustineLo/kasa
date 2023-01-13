import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
