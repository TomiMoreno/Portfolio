import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "../styles/components/Header.module.css";
import { AVATAR_URL, GITHUB_URL, LINKEDIN_URL, SITE_NAME } from "../utils/site";
import ButtonIcon from "./ButtonIcon";

export default function Header() {
  const t = useTranslations("header");
  return (
    <header className={styles.header}>
      <Image
        className={styles.photo}
        src={AVATAR_URL}
        alt={SITE_NAME}
        width={320}
        height={320}
        sizes="(max-width: 640px) 12rem, 20rem"
        priority
      />
      <div className={styles.intro}>
        <h1 className={styles.title}>
          <span className="colorGreen">Tomás</span> Canosa Moreno
        </h1>
        <p className={styles.role}>{t("fullstack-developer")}</p>
        <ul className={styles.links}>
          <li>
            <ButtonIcon href={GITHUB_URL} imageURL="/github.svg" external>
              GitHub
            </ButtonIcon>
          </li>
          <li>
            <ButtonIcon href={LINKEDIN_URL} imageURL="/linkedin.svg" external>
              LinkedIn
            </ButtonIcon>
          </li>
        </ul>
      </div>
    </header>
  );
}
