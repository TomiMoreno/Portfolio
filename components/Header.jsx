import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={`${styles.header} ${styles.split}`}>
        <div className={styles.circle}></div>
        <div className={styles.photoContainer}>
          <img
            className={styles.photo}
            src="https://avatars.githubusercontent.com/u/51180401?v=4"
            alt="Tomás Canosa Moreno"
          />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <span className="accentColor">Tomás</span> Canosa Moreno
          </h1>
          <h2>Desarrollador fullstack</h2>
          <ul className={styles.attributes}>
            <li>
              <Link href="https://github.com/TomiMoreno">
                <a className="flex" target="_blank" rel="noopener">
                  <Image
                    width={32}
                    height={32}
                    src="/github-white.svg"
                    alt="Github logo"
                  />
                  <span>Github</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/tom%C3%A1s-canosa-moreno-7823191b5/">
                <a className="flex" target="_blank" rel="noopener">
                  <Image
                    width={32}
                    height={32}
                    src="/linkedin.svg"
                    alt="Linkedin logo"
                  />
                  <span>LinkedIn</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
