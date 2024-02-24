"use client";

import React from "react";
import styles from "./header.module.scss";
import { HeaderData } from "@/constants/header";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.mainheader}>
      <div className={styles.innerheader}>
        <p className={styles.heading}>{HeaderData.heading}</p>
        <div className={styles.subheading}>
          <div className={styles.elements}>
            <Image
              src="/images/IMAGE (4).png"
              alt="element"
              width={17.2}
              height={16.92}
              className={styles.ICONS}
            />
            <p>Last Updated</p>- <p>February 22, 2020</p>
            <Image
              src="/images/IMAGE (3).png"
              alt="element"
              width={17.2}
              height={16.92}
              className={styles.ICONS}
            />
            <p>Advertising Disclosure</p>
          </div>
          <div className={styles.elements}>
            <p>Top Relevant</p>
            <Image
              src="/images/Vector (5).png"
              alt="element"
              width={13.5}
              height={7.2}
              className={styles.ICONS}
            />
          </div>
        </div>
        <div className={styles.buttonarea}>
          {HeaderData.button.map((items, index) => (
            <div className={styles.button}>
              <p>{items.data}</p></div>
          ))}
        </div>
        <div className={styles.flow}>
            <p>Home</p>
            <Image src="/images/Vector (4).png" alt="" width={10} height={8.25} />
            <p>Hosting for all</p>
            <Image src="/images/Vector (4).png" alt="" width={10} height={8.25} />
            <p>Hosting</p>
            <Image src="/images/Vector (4).png" alt="" width={10} height={8.25} />
            <p>Hosting6</p>
            <Image src="/images/Vector (4).png" alt="" width={10} height={8.25} />
            <p>Hosting5</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
