import Image from "next/image";

import Button from "../button/Button";

import styles from "./projectCard.module.css";

const ProjectCard = ({ data }: any) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay}>
          <div className={styles.hoverButtons}>
            <Button text="View Project" />
            <Button text="View Code" />
          </div>
        </div>
        <Image
          src={data.imageUrl}
          alt="project 1"
          className={styles.image}
          fill
        />
      </div>
      <h3>{data.title}</h3>
      <div className={styles.tech}>
        {data.tech.map((t: any) => {
          return <p key={t}>{t}</p>;
        })}
      </div>
      <div className={styles.buttons}>
        <Button text="View Project" />
        <Button text="View Code" />
      </div>
    </div>
  );
};

export default ProjectCard;
