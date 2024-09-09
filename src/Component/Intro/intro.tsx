import React from "react";
import styles from "./Intro.module.css";
import picture from "../../assets/Component 1.png"; // Ensure the path is correct

const Intro: React.FC = () => {
  return (
    <div className={styles.introWrapper}>
      <img src={picture} alt="Intro" className={styles.introImage} />
    </div>
  );
};

export default Intro;
