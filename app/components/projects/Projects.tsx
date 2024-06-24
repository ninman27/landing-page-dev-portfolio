import Button from "../button/Button";
import ProjectCard from "../project-card/ProjectCard";

import { ProjectData } from "./data";

import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section className="paddingInline">
      <div className={styles.headingContainer}>
        <h1>Projects</h1>
        <Button text="Contact Me" />
      </div>
      <div className={styles.cards}>
        {ProjectData.map((project) => {
          return <ProjectCard data={project} key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
