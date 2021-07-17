import styles from "../styles/components/Header.module.css";
export default function Header() {
  return (
    <>
      <header className={`${styles.header} ${styles.split}`}>
        <div className={styles.circle}></div>
        <div className={styles.photoContainer} >
          <img className={styles.photo}src="https://avatars.githubusercontent.com/u/51180401?v=4" alt="Tomás Canosa Moreno" />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className="accentColor">Tomás</span> Canosa Moreno
          </h1>
          <ul className={styles.attributes}>
            <li>💻Web developer</li>
            <li>🌎Bs. As. Argentina</li>
            <li>📅18 años</li>
            <li>📚Estudiante</li>
          </ul>
          <a href="#contacto">Contactame!</a>
        </div>
      </header>
    </>
  );
}
