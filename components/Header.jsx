import styles from '../styles/components/Header.module.css'
import Navbar from './Navbar'
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}><span className="accentColor">Tomás</span> Canosa Moreno</h1>
          <ul className={styles.attributes}>
            <li>💻Web developer</li>
            <li>🌎Bs. As. Argentina</li>
            <li>📅18 años</li>
            <li>🎩 Mafioso</li>
            <li>📚Estudiante</li>
            <li>👞Zapatero</li>
          </ul>
        </div>
      </header>
    </>
  )
}