import { useTranslations } from "next-intl";
import styles from "../styles/components/Contact.module.css";
import ButtonIcon from "./ButtonIcon";

export default function Contact() {
  const t = useTranslations("contact-me");
  return (
    <div className={styles.container}>
      <h2>{t("work-with-me")}</h2>
      <ButtonIcon
        href="https://linkedin/in/tomimoreno"
        imageURL="/linkedin.svg"
        imageAlt="LinkedIn"
      >
        {t("contact-me")}
      </ButtonIcon>
    </div>
  );
}
