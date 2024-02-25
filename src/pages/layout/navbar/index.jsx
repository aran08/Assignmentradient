"use client"

import React from "react";
import styles from "./navbar.module.scss";

const Index = () => {
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
          <div className={styles.menulines}>
            <p className={styles.line} />
            <p className={styles.line} />
            <p className={styles.line} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
