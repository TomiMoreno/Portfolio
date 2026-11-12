import { useTranslations } from "next-intl";
import styles from "../styles/components/Contact.module.css";
import { LINKEDIN_URL } from "../utils/site";
import ButtonIcon from "./ButtonIcon";

export default function Contact() {
  const t = useTranslations("contact-me");
  return (
    <section id="contact" className={`section ${styles.container}`}>
      <h2>{t("work-with-me")}</h2>
      <ButtonIcon
        href={LINKEDIN_URL}
        imageURL="/linkedin.svg"
        className={styles.cta}
        external
      >
        {t("contact-me")}
      </ButtonIcon>
    </section>
  );
}
