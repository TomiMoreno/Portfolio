import styles from "../styles/components/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="sobreMi" className={styles.container}>
      <h1>Acerca de mí</h1>
      <p>
        Soy un apasionado de la resolución de problemas, me gustaría trabajar en
        un ambiente de crecimiento constante y desafiante, sentir que aprendo
        algo nuevo cada día.
      </p>
      <h2>Habilidades</h2>
      <div className={styles.split}>
        <div className={styles.hardSkills}>
          <img src="/hard-skills.svg" alt="Habilidades duras" />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Next</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className={styles.softSkills}>
          <img src="/soft-skills.svg" alt="Habilidades blandas" />
          <ul>
            <li>Buena comunicación</li>
            <li>Curiosidad</li>
            <li>Aprendizaje constante</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
