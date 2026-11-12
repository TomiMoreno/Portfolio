import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "../styles/components/Projects.module.css";
import ButtonIcon from "./ButtonIcon";
import Project from "./Project";

const PAGE_SIZE = 6;

export default function Projects({ projects }) {
  const [numberOfProjects, setNumberOfProjects] = useState(PAGE_SIZE);
  const t = useTranslations("projects");
  if (!projects.length) return null;
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title">{t("my-projects")}</h2>
      <ul className={styles.grid}>
        {projects.slice(0, numberOfProjects).map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ul>
      {numberOfProjects < projects.length && (
        <ButtonIcon
          className={styles.showMore}
          onClick={() => setNumberOfProjects((n) => n + PAGE_SIZE)}
        >
          {t("show-more")}
        </ButtonIcon>
      )}
    </section>
  );
}
