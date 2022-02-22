import { useState } from "react";
import Project from "./Project";
import styles from "../styles/components/Projects.module.css";
import { projectList } from "../data/Projects";
import ButtonIcon from "./ButtonIcon";
import { useMakeScrollable } from "../hooks/useScrollIntoView";

export default function Projects() {
  const [numberOfProjects, setNumberOfProjects] = useState(3);
  const ref = useMakeScrollable("projects");
  return (
    <>
      <main className={styles.proyectos} ref={ref}>
        <h2 className={styles.title}>Mis proyectos</h2>
        <div className={styles.container}>
          {projectList.slice(0, numberOfProjects).map((project, i) => (
            <Project isOdd={i % 2 === 1} key={`project-${i}`} {...project} />
          ))}
        </div>
        {numberOfProjects < projectList.length && (
          <ButtonIcon
            className={styles.showMore}
            imageURL="add.svg"
            imageAlt="Plus"
            onClick={() => {
              setNumberOfProjects((n) => n + 3);
            }}
          >
            Mostrar más
          </ButtonIcon>
        )}
      </main>
    </>
  );
}
