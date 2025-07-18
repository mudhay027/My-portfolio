import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Udhay</h1>
        <p className={styles.description}>
          I'm a data enthusiast with a strong foundation in Python, SQL, and Machine Learning. 
          I specialize in solving real-world problems using AI and data analysis. 
          Reach out if you'd like to collaborate or learn more!
        </p>
        <a href="mailto:msudhay2005@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};