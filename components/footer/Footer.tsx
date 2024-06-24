import Link from "next/link";

import styles from "./footer.module.css";

import {
  SiGithub,
  SiFrontendmentor,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className={`${styles.container} paddingInline`}>
      <hr />
      <div className={styles.footerContainer}>
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
      </div>
    </div>
  );
};

export default Footer;
