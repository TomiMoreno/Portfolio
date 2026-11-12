import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";
import ChangeLanguage from "./ChangeLanguage";

const NAVBAR_LINKS = [
  { name: "projects", href: "/#projects" },
  { name: "experience", href: "/#experience" },
  { name: "gallery", href: "/gallery" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  return (
    <nav className={styles.navbar} aria-label={t("main")}>
      <Link href="/" className={styles.brand} aria-label={t("home")}>
        Tomás
      </Link>
      <ul className={styles.list}>
        {NAVBAR_LINKS.map(({ name, href }) => (
          <li key={name}>
            <Link className={styles.link} href={href}>
              {t(name)}
            </Link>
          </li>
        ))}
        <li>
          <ChangeLanguage />
        </li>
      </ul>
    </nav>
  );
}
