import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.css";

const LANGUAGES = [
  { locale: "es", label: "Español", flag: "/argentina.png" },
  { locale: "en", label: "English", flag: "/united-states.png" },
];

export default function ChangeLanguage() {
  const t = useTranslations("nav");
  const { pathname, query, asPath, locale } = useRouter();
  return (
    <div className={styles.languages} role="group" aria-label={t("language")}>
      {LANGUAGES.map(({ locale: l, label, flag }) => (
        <Link
          key={l}
          href={{ pathname, query }}
          as={asPath}
          locale={l}
          hrefLang={l}
          lang={l}
          title={label}
          aria-label={label}
          aria-current={locale === l ? "true" : undefined}
          className={locale === l ? styles.languageActive : styles.language}
        >
          <Image src={flag} alt="" width={20} height={20} />
        </Link>
      ))}
    </div>
  );
}
