import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import styles from "../styles/components/Project.module.css";
import ButtonIcon from "./ButtonIcon";
import Technologies from "./Technologies";

export default function Project({
  title,
  titleEs,
  description,
  descriptionEs,
  codeURL,
  pageURL,
  technologies,
}) {
  const { locale } = useRouter();
  const t = useTranslations("projects");
  // Fall back to the other language rather than rendering an empty card.
  const [localTitle, localDescription] =
    locale === "es"
      ? [titleEs ?? title, descriptionEs ?? description]
      : [title ?? titleEs, description ?? descriptionEs];

  return (
    <li className={styles.project}>
      <h3>{localTitle}</h3>
      {localDescription && <p>{localDescription}</p>}
      <Technologies technologies={technologies} />
      {(codeURL || pageURL) && (
        <div className={styles.btnContainer}>
          {codeURL && (
            <ButtonIcon
              href={codeURL}
              imageURL="/github.svg"
              aria-label={`${t("visit-code")}: ${localTitle}`}
              external
            >
              {t("visit-code")}
            </ButtonIcon>
          )}
          {pageURL && (
            <ButtonIcon
              href={pageURL}
              imageURL="/globe.svg"
              aria-label={`${t("visit-page")}: ${localTitle}`}
              external
            >
              {t("visit-page")}
            </ButtonIcon>
          )}
        </div>
      )}
    </li>
  );
}
