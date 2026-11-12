import Link from "next/link";
import styles from "../styles/components/GalleryProject.module.css";

export default function GalleryProject({ id, title, description, viewLabel }) {
  return (
    <li className={styles.project}>
      <iframe
        src={`/${id}`}
        title={title}
        className={styles.iframe}
        loading="lazy"
        tabIndex={-1}
      />
      <div className={styles.body}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={`/project/${id}`} className={styles.link}>
          {viewLabel} →
        </Link>
      </div>
    </li>
  );
}
