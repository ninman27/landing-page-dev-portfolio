import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={`${styles.container} paddingInline`}>
      <hr />
      <div className={styles.skillsContainer}>
        <div className={styles.skill}>
          <h2>HTML</h2>
          <p>4 Years Experience</p>
        </div>
        <div className={styles.skill}>
          <h2>CSS</h2>
          <p>4 Years Experience</p>
        </div>
        <div className={styles.skill}>
          <h2>JavaScript</h2>
          <p>4 Years Experience</p>
        </div>
        <div className={styles.skill}>
          <h2>Accessibility</h2>
          <p>4 Years Experience</p>
        </div>
        <div className={styles.skill}>
          <h2>React</h2>
          <p>3 Years Experience</p>
        </div>
        <div className={styles.skill}>
          <h2>Sass</h2>
          <p>3 Years Experience</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Skills;
