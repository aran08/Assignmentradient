"use client";
import styles from "./Home.module.scss";
import Navbar from "@/pages/layout/navbar";
import Header from "@/components/Home/headersection";
import MiddleBlock from "@/components/Home/MiddleBlocks";
import Lowerblock from "@/components/Home/LowerBlock"
import Footer from "@/pages/layout/footer";
export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Header />
      <MiddleBlock />
      <Lowerblock/>
      <Footer />
    </div>
  );
}
