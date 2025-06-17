import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                Skilled in building ML models like SVM, K-Means, and Decision Trees for pattern recognition and prediction.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Data Analyst</h3>
              <p>
                Experienced in data cleaning, visualization, and
                 insights using Power BI, Tableau, and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> AI Developer</h3>
              <p>
                Built real-time AI systems using TensorFlow and YOLOv8 for tasks like pothole and anomaly detection.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};