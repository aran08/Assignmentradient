"use client";

import React from "react";
import { BlockData } from "@/content/blocks";
import styles from "./middle.module.scss"
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.innercontainer}>
        {BlockData.map((items, index) => (
          <div key={index} className={styles.innerbox}>
            <div className={styles.part1}>
              <img src={items.image1} alt="" />
              <p>{items.imagebottomcontent}</p>
              <div className={styles.count}>
                {items.count}
              </div>
              {items.topbutton && (
                <div className={styles.topbutton}>
                  <Image src={items.topbutton.image} width={20} height={20} />
                  <p className={styles.content}>
                    {items.topbutton.content}
                  </p>
                </div>
              )}
            </div>
            <div className={styles.part2}>
              <p className={styles.context1}>
                <span className={styles.heading}>{items.topheading}</span>
                {items.content}
              </p>
              <p className={styles.topheading}>
                {items.topheading1}
              </p>
              {items.content1 && (
                <p className={styles.content1}>
                  {items.content1}
                </p>
              )}

              {items.box && (
                <div className={styles.box}>
                  {items.box.map((content, id) => (
                    <div className={styles.boxcontent} key={id}>
                      <p className={styles.boxvalue}>
                        {content.value}
                      </p>
                      <p className={styles.boxcontent}>
                        {content.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {items.box1 && (
                <div>
                  <p className={styles.box1title}>
                    {items.box1.title}
                  </p>
                  {items.box1.box.map((content, id) => (
                    <div key={id} className={styles.box1container}>
                      <Image
                        src="/images/tick.png"
                        alt=""
                        width={24}
                        height={24}
                      />
                      <p className={styles.box1title}>
                        {content.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.section}>
                <p>{items.lowersection}</p>
                {items.image && <img src={items.image} alt="" />}
              </div>

            </div>
            <div className={styles.part3}>
              <div className={styles.part3inner}>
                <div className={styles.innercard}>
                  <div className={styles.innercartcontent}>
                    <div className={styles.innercartimage}>
                      {items.image3 && (
                        <Image
                          src={items.image3}
                          alt=""
                          width={10}
                          height={10}
                        />
                      )}
                    </div>
                    <p className={styles.cardrating}>
                      {items.ratingvalue}
                    </p>
                    <p className={styles.cardcomment}>
                      {items.comment}
                    </p>
                    <div>
                      <img src={items.star} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                {items.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;