import styles from "../styles/components/GalleryProject.module.css";
import ButtonIcon from "./ButtonIcon";


const GalleryProject = ({ src, title, description } ) => {
  return (
    <div className={styles.project}>
      <iframe src={src} title={title} className={styles.iframe}></iframe>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ButtonIcon href={`/project${src}`} imageAlt="View project" imageURL="/globe.svg">
        View Project
      </ButtonIcon>
    </div>
  );
};

export default GalleryProject;
