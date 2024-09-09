import React from "react";
import styles from "./Projects.module.css";
import projectImage1 from "../../assets/Rectangle 14.png"; // Your image paths here
import projectImage2 from "../../assets/Rectangle 13.png";
import projectImage3 from "../../assets/Rectangle 8.png";
import projectImage4 from "../../assets/Rectangle 6.png";
import projectImage5 from "../../assets/Rectangle 4.png";
// Import more project images if necessary

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Project Title goes here",
      description:
        "This is a sample project description. Random things are here in description.",
      techStack: "HTML, JavaScript, SASS, React",
      livePreview: "#",
      viewCode: "#",
      image: projectImage1,
    },
    {
      title: "Project Title goes here",
      description:
        "This is a sample project description. Random things are here in description.",
      techStack: "HTML, JavaScript, SASS, React",
      livePreview: "#",
      viewCode: "#",
      image: projectImage2,
    },
    {
      title: "Project Title goes here",
      description:
        "This is a sample project description. Random things are here in description.",
      techStack: "HTML, JavaScript, SASS, React",
      livePreview: "#",
      viewCode: "#",
      image: projectImage3,
    },
    {
      title: "Project Title goes here",
      description:
        "This is a sample project description. Random things are here in description.",
      techStack: "HTML, JavaScript, SASS, React",
      livePreview: "#",
      viewCode: "#",
      image: projectImage4,
    },
    {
      title: "Project Title goes here",
      description:
        "This is a sample project description. Random things are here in description.",
      techStack: "HTML, JavaScript, SASS, React",
      livePreview: "#",
      viewCode: "#",
      image: projectImage5,
    },
    {
      title: "Project Title goes here",
      description:
        "This is a sample project description. Random things are here in description.",
      techStack: "HTML, JavaScript, SASS, React",
      livePreview: "#",
      viewCode: "#",
      image: projectImage3,
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <p className={styles.projectsSubtitle}>Things I’ve built so far</p>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectTechStack}>
                Tech stack: {project.techStack}
              </p>
              <div className={styles.projectLinks}>
                <a href={project.livePreview} className={styles.projectLink}>
                  Live Preview
                </a>
                <a href={project.viewCode} className={styles.projectLink}>
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
