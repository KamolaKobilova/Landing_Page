import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logo}>
          <h1>{'{007}'}</h1>
          <p>pavanmg</p>
        </div>
        <div className={styles.contactInfo}>
          <p>+91 12345 09876</p>
          <p>info@example.com</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <nav className={styles.footerNav}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
        <div className={styles.footerCredits}>
          <p>
            Designed and built by <span>Pavan MG</span> with{' '}
            <span>Coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
