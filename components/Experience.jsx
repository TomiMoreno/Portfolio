import Link from "next/link";
import styles from "../styles/components/Experience.module.css";
const EXPERIENCIA = [{
  id: 1,
  company: "Dreamcode",
  title: "Desarrollador fullstack",
  started: "Ago. 2021",
  ended: "Actualmente",
  link: "https://www.dreamcode.io/",
},
{
  id: 2,
  company: "SyrFox",
  title: "Desarrollador fullstack",
  started: "Dic. 2020",
  ended: "Ago. 2021",
  link: "https://www.linkedin.com/in/syr-fox-s-a-8623952b"
}
]

export default function Experience() {
  return (
    <section id="sobreMi" className={styles.container}>
      <h2>Experiencia</h2>
      <ul className={styles.experienceUl}>
        {EXPERIENCIA.map(({id, company, started, ended, link, title}, index) => (
          <li key={index}>
            <div className={styles.col}>
             <p>{title}</p> 
              <h3>
                <Link href={link}>
                  <a target="_blank" rel="noopener">
                    {company}
                  </a>
                </Link>
              </h3>
            </div>
            <p>
              <span>{started} - {ended}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
