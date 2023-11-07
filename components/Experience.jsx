import { useIntl, useTranslations } from "next-intl";
import Link from "next/link";
import { useMakeScrollable } from "../hooks/useScrollIntoView";
import styles from "../styles/components/Experience.module.css";
const EXPERIENCIA = [
  {
    company: "Boomerang",
    title: "frontend-developer",
    started: "2023-11-01T03:00:00.000Z",
    ended: "currently",
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

export default function Experience() {
  const t = useTranslations("experience");
  const intl = useIntl();
  const ref = useMakeScrollable("experience");
  return (
    <section className={styles.container} ref={ref}>
      <h2>{t("experience")}</h2>
      <ul className={styles.experienceUl}>
        {EXPERIENCIA.map(({ company, started, ended, link, title }, index) => {
          const startDate = intl
            .formatDateTime(new Date(started), {
              year: "numeric",
              month: "short",
            })
            .replace(/^./, (str) => str.toUpperCase());
          const endDate =
            ended === "currently"
              ? t("currently")
              : intl
                  .formatDateTime(new Date(ended), {
                    year: "numeric",
                    month: "short",
                  })
                  .replace(/^./, (str) => str.toUpperCase());
          return (
            <li key={company}>
              <div className={styles.col}>
                <p>{t(title)}</p>
                <h3>
                  <Link href={link} target="_blank" rel="noopener">
                    {company}
                  </Link>
                </h3>
              </div>
              <p>
                <span>
                  {startDate} - {endDate}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
