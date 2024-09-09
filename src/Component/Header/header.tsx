import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.logo}>{"{007} pavanng"}</h1>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#techstack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={styles.socialIcons}>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
