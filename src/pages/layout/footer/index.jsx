"use client";

import React from "react";
import styles from "./footer.module.scss";
import { FooterData } from "@/constants/footerdta";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.innercontainer}>
        {FooterData.map((items, index) => (
          <div key={index} className={styles.Elements}>
            <p className={styles.title}>{items.title}</p>
            {items.Data.map((data, id) => (
              <p key={id}>{data.data}</p>
            ))}
          </div>
        ))}
        <div className={styles.thirdpart}>
            <p>United State</p>
            <Image src="/images/IMAGE2.png" alt="lowerdown" width={15} height={9}/>
        </div>
      </div>
    </div>
  );
};

export default Index;

