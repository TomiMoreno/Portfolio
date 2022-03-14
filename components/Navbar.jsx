import { useTranslations } from "next-intl";
import { scrollTo } from "../hooks/useScrollIntoView";
import styles from "../styles/components/Navbar.module.css";
import ChangeLanguage from "./ChangeLanguage";

export default function Navbar() {
  const t = useTranslations("header");
  return (
    <nav className={styles.navbar}>
      <h3 className="colorGreen">Tomás</h3>
      <input
        type="checkbox"
        id="nav-toggle"
        className={styles.navToggle}
      ></input>
      <ul className={styles.list}>
        <li>
          <a
            className={styles.listElement}
            onClick={() => scrollTo("projects")}
          >
            {t("my-projects")}
          </a>
        </li>
        <li>
          <a
            className={styles.listElement}
            onClick={() => scrollTo("experience")}
          >
            {t("experience")}
          </a>
        </li>
        <li>
          <ChangeLanguage />
        </li>
      </ul>
      <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
        <span></span>
      </label>
    </nav>
  );
}
