import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import styles from "./TechStack.module.css";

const TechStack: React.FC = () => {
  return (
    <section className={styles.techStackWrapper}>
      <h2>My Tech Stack</h2>
      <div className={styles.icons}>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <SiRedux />
        <SiTypescript />
        <FaSass />
        <FaBootstrap />
        <SiTailwindcss />
        <FaGitAlt />
        <SiVisualstudiocode />
        <FaGithub />
      </div>
    </section>
  );
};

export default TechStack;
