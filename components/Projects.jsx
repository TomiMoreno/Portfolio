import { useTranslations } from "next-intl";
import { useState } from "react";
import { useMakeScrollable } from "../hooks/useScrollIntoView";
import styles from "../styles/components/Projects.module.css";
import ButtonIcon from "./ButtonIcon";
import Project from "./Project";

export default function Projects({ projects }) {
  const [numberOfProjects, setNumberOfProjects] = useState(3);
  const t = useTranslations("projects");
  const ref = useMakeScrollable("projects");
  return (
    <>
      <main className={styles.proyectos} ref={ref} >
        <h2 className={styles.title}>{t("my-projects")}</h2>
        <div className={styles.container}>
          {projects.slice(0, numberOfProjects).map((project, i) => (
            <Project isOdd={i % 2 === 1} key={project.id} {...project} />
          ))}
        </div>
        {numberOfProjects < projects.length && (
          <ButtonIcon
            className={styles.showMore}
            imageURL="add.svg"
            imageAlt="Plus"
            onClick={() => {
              setNumberOfProjects((n) => n + 3);
            }}
          >
            {t("show-more")}
          </ButtonIcon>
        )}
      </main>
    </>
  );
}
