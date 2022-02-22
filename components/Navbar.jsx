import { scrollTo } from "../hooks/useScrollIntoView";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar() {
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
            Mis proyectos
          </a>
        </li>
        <li>
          <a className={styles.listElement} onClick={() => scrollTo("aboutMe")}>
            Acerca de mi
          </a>
        </li>
      </ul>
      <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
        <span></span>
      </label>
    </nav>
  );
}
