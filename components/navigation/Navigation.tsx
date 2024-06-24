import {
  SiGithub,
  SiFrontendmentor,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

import styles from "./navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={`${styles.container} paddingInline`}>
      <p className={styles.logo}>adamkeyes</p>
      <div className={styles.iconContainer}>
        <Link href="/">
          <SiGithub size={24} />
        </Link>
        <Link href="/">
          <SiFrontendmentor size={24} />
        </Link>
        <Link href="/">
          <SiLinkedin size={24} />
        </Link>
        <Link href="/">
          <SiTwitter size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
