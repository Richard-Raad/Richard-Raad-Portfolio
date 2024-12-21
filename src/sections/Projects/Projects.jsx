import React from 'react';
import styles from './ProjectsStyles.module.css';
import realtor101 from '../../assets/Realtor 101.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={realtor101}
          link="https://github.com/Richard-Raad/HackVT12-Project"
          h3="Realtor 101"
          p="Hackathon project"
        />
      </div>
    </section>
  );
}

export default Projects;
