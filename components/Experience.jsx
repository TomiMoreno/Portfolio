import { useFormatter, useTranslations } from "next-intl";
import styles from "../styles/components/Experience.module.css";

const EXPERIENCE = [
  {
    company: "Boomerang",
    title: "frontend-developer",
    started: "2023-11-01T03:00:00.000Z",
    ended: null,
    link: "https://thanksboomerang.com/",
  },
  {
    company: "Dreamcode",
    title: "fullstack-developer",
    started: "2021-08-01T03:00:00.000Z",
    ended: "2023-11-01T03:00:00.000Z",
    link: "https://www.dreamcode.io/",
  },
  {
    company: "SyrFox",
    title: "fullstack-developer",
    started: "2020-11-01T03:00:00.000Z",
    ended: "2021-08-01T03:00:00.000Z",
    link: "https://www.linkedin.com/in/syr-fox-s-a-8623952b",
  },
];

const capitalize = (text) => text.replace(/^./, (char) => char.toUpperCase());

export default function Experience() {
  const t = useTranslations("experience");
  const format = useFormatter();
  const formatMonth = (date) =>
    capitalize(
      format.dateTime(new Date(date), { year: "numeric", month: "short" })
    );

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title">{t("experience")}</h2>
      <ol className={styles.list}>
        {EXPERIENCE.map(({ company, started, ended, link, title }) => (
          <li key={company} className={styles.item}>
            <div>
              <h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {company}
                </a>
              </h3>
              <p>{t(title)}</p>
            </div>
            <p className={styles.dates}>
              <time dateTime={started.slice(0, 7)}>{formatMonth(started)}</time>
              {" – "}
              {ended ? (
                <time dateTime={ended.slice(0, 7)}>{formatMonth(ended)}</time>
              ) : (
                t("currently")
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
