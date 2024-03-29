import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  const t = useTranslations("header");
  return (
    <>
      <header className={`${styles.header} ${styles.split}`}>
        <div className={styles.photoContainer}>
          <img
            className={styles.photo}
            src="https://avatars.githubusercontent.com/u/51180401?v=4"
            alt="Tomás Canosa Moreno"
          />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className="colorGreen">Tomás</span> Canosa Moreno
          </h1>
          <h2>{t("fullstack-developer")}</h2>
          <ul className={styles.attributes}>
            <li>
              <Link
                href="https://github.com/TomiMoreno"
                className="flex"
                target="_blank"
                rel="noopener"
              >
                <>
                  <Image
                    width={32}
                    height={32}
                    src="/github.svg"
                    alt="Github logo"
                  />
                  <span>Github</span>
                </>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/tomimoreno"
                className="flex"
                target="_blank"
                rel="noopener"
              >
                <>
                  <Image
                    width={32}
                    height={32}
                    src="/linkedin.svg"
                    alt="Linkedin logo"
                  />
                  <span>LinkedIn</span>
                </>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
