import React from "react";
import styles from "./TechStack.module.css";
import htmlLogo from "../../assets/vscode-icons_file-type-html.png";
import cssLogo from "../../assets/vscode-icons_file-type-css.png";
import jsLogo from "../../assets/vscode-icons_file-type-js-official.png";
import reactLogo from "../../assets/logos_react.png";
import reduxLogo from "../../assets/Vector.png";
import bootstrapLogo from "../../assets/logos_bootstrap.png";
import tailwindLogo from "../../assets/vscode-icons_file-type-tailwind.png";
import sassLogo from "../../assets/logos_sass.png";
import gitLogo from "../../assets/logos_git-icon.png";
import superheroLogo from "../../assets/cib_greensock.png";
import vscodeLogo from "../../assets/vscode-icons_file-type-vscode.png";
import githubLogo from "../../assets/akar-icons_github-fill.png";

const TechStack: React.FC = () => {
  return (
    <section className={styles.techStackSection}>
      <h2 className={styles.techStackTitle}>My Tech Stack</h2>
      <p className={styles.techStackSubtitle}>
        Technologies I’ve been working with recently
      </p>
      <div className={styles.iconsGrid}>
        <img src={htmlLogo} alt="HTML" className={styles.techImage} />
        <img src={cssLogo} alt="CSS" className={styles.techImage} />
        <img src={jsLogo} alt="JavaScript" className={styles.techImage} />
        <img src={reactLogo} alt="React" className={styles.techImage} />
        <img src={reduxLogo} alt="Redux" className={styles.techImage} />
        <img src={bootstrapLogo} alt="Bootstrap" className={styles.techImage} />
        <img src={tailwindLogo} alt="Tailwind" className={styles.techImage} />
        <img src={sassLogo} alt="Sass" className={styles.techImage} />
        <img src={gitLogo} alt="Git" className={styles.techImage} />
        <img src={superheroLogo} alt="Superhero" className={styles.techImage} />
        <img src={vscodeLogo} alt="VSCode" className={styles.techImage} />
        <img src={githubLogo} alt="GitHub" className={styles.techImage} />
      </div>
    </section>
  );
};

export default TechStack;
