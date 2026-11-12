import styles from "../styles/components/Footer.module.css";
import { GITHUB_URL, LINKEDIN_URL, SITE_NAME } from "../utils/site";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © {new Date().getFullYear()} {SITE_NAME}
      </span>
      <span className={styles.links}>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </span>
    </footer>
  );
}
