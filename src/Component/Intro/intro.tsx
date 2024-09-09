import React from "react";
import styles from "./Intro.module.css";

const Intro: React.FC = () => {
  return (
    <section className={styles.introWrapper}>
      <div className={styles.textContent}>
        <h1>Hi 👋,</h1>
        <h2>My name is Pavan MG</h2>
        <p>I build things for the web</p>
      </div>
      <div className={styles.profileImage}>
        <img src="profile.jpg" alt="Pavan MG" />
      </div>
    </section>
  );
};

export default Intro;
