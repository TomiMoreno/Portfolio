import { useState } from "react";
import Project from "./Project";
import styles from "../styles/components/Projects.module.css";
import SvgCurve from "./SvgCurve";
import { projectList } from "../data/Projects";
import ButtonIcon from "./ButtonIcon";

export default function Projects() {
  const [numberOfProjects, setNumberOfProjects] = useState(3);
  return (
    <>
      <main className={styles.proyectos} id="proyectos">
        <h1 className={styles.title}>Mis proyectos</h1>
        <div className={styles.container}>
          {projectList.slice(0, numberOfProjects).map((project, i) => (
            <Project isOdd={i % 2 === 1} key={`project-${i}`} {...project} />
          ))}
        </div>
        {numberOfProjects < projectList.length && (
          <ButtonIcon
            className={styles.showMore}
            imageURL="add.svg"
            onClick={() => {
              setNumberOfProjects((n) => n + 3);
            }}
          >
            Mostrar más
          </ButtonIcon>
        )}
        <SvgCurve />
      </main>
    </>
  );
}
