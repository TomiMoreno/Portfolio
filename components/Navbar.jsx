import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.css";
import ChangeLanguage from "./ChangeLanguage";

const NAVBAR_LINKS = [
  {
    name: "my-projects",
    href: "/#projects",
  },
];

export default function Navbar() {
  const t = useTranslations("header");
  const router = useRouter();

  const route = router.pathname;
  const locale = router.locale;

  console.log({
    route,
    locale,
  })

  const isNotHome = route !== `/`;
  return (
    <nav className={styles.navbar}>
      <Link href={`/`}>
      <h3 className="colorGreen">Tomás</h3>
      </Link>
      <input
        type="checkbox"
        id="nav-toggle"
        className={styles.navToggle}
      ></input>
      <ul className={styles.list}>
        <li>
          <Link
            className={styles.listElement}
            href={`/gallery`}
          >
            {t("gallery")}
          </Link>
        </li>
        <li>
          <ChangeLanguage />
        </li>
      </ul>
      <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
        <span></span>
      </label>
    </nav>
  );
}
