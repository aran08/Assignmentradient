"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // console.log(isMenuOpen);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.innercontainer}>
        <div className={styles.searchbar}>
          <img src="/images/IMAGE.png" alt="" />
        </div>
        <div className={styles.navelements}>
          <p className={styles.element}>Categories</p>
          <p className={styles.element}>Website Builders</p>
          <p className={styles.element}>Today's deals</p>
        </div>

        <div className={styles.menusection}>
          <p className={styles.menutext}>MENU</p>
          <div className={styles.menulines} onClick={toggleMenu}>
            <p className={styles.line} />
            <p className={styles.line} />
            <p className={styles.line} />
          </div>
        </div>

        {isMenuOpen && (
          <div className={styles.dropdownContent}>
            <p>Categories</p>
            <p>Website Builders</p>
            <p>Today's deals</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
