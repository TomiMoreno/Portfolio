import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3 className="accentColor">Tomás</h3>
      <input type="checkbox" id="nav-toggle" className={styles.navToggle}></input>
      <ul className={styles.list}>
        <li><a className={styles.listElement} href="#proyectos">Mis proyectos</a></li>
        <li><a className={styles.listElement} href="#sobreMi">Acerca de mi</a></li>
        <li><a className={styles.listElement} href="#contacto">Contactame</a></li>
      </ul>
      <label for="nav-toggle" className={styles.navToggleLabel}>
        <span></span>
      </label>
    </nav>
  )
}
