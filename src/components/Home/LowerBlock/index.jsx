"use client"

import React from 'react'
import styles from "./lowerblock.module.scss"
import { LowerBlockData } from '@/content/lowerblock'

const Index = () => {
  return (
    <div className={styles.mainblock}>
     <div className={styles.container}>
      <p className={styles.topheading}>{LowerBlockData.topheading}</p>
      <div className={styles.gridcontainer}>
        {LowerBlockData.blocksdata.map((items, index) =>(
          <div className={styles.gridbox}key={index} >
               <div className={styles.lowerimagebox} >
                  <img src={items.images} alt="" />
               </div>
               <div className={styles.offbox}>
                  <p className={styles.offdetails}>{items.off}</p>
                  <p className={styles.offdetails}>{items.time}</p>
               </div>
               <p className={styles.webinar}>{items.heading}</p>
               <p className={styles.details}>{items.details}</p>
               <div className={styles.last}>
                <p className={styles.discount}>{items.discounted}</p>
                <p className={styles.actual}>{items.actual}</p>
                <p className={styles.offdata}>{items.offdata}</p>
               </div>

               <button className={styles.viewbutton}>{items.buttoncontent}</button>
           </div>
        ))}
           
      </div>
       <div className={styles.lowercontentblock}>
        <p className={styles.lowercontent}>{LowerBlockData.lowercontent}</p>
        <div className={styles.signup}>
         <input  className={styles.input}/>
         <button className={styles.buttonsignup}>{LowerBlockData.buttoncontent}</button>
        </div>
        
       </div>
     </div>
    </div>
  )
}

export default Index