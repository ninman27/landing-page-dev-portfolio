import Image from "next/image";

import ProfileImage from "@/public/images/image-profile-desktop.webp";
import Button from "../button/Button";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.container} paddingInline`}>
      <div className={styles.textContainer}>
        <h1>
          Nice to meet you! I’m{" "}
          <span className={styles.underline}>Adam Keyes</span>.
        </h1>
        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <Button text="Contact Me" />
      </div>
      <Image
        src={ProfileImage}
        alt="profile image desktop"
        className={styles.image}
      />
    </section>
  );
};

export default Hero;
