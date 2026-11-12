import { useTranslations } from "next-intl";
import Footer from "../components/Footer";
import GalleryProject from "../components/GalleryProject";
import Navbar from "../components/Navbar";
import Seo from "../components/Seo";
import styles from "../styles/components/GalleryProject.module.css";
import { GALLERY_PROJECTS } from "../utils/galleryProjects";
import { getMessages } from "../utils/getMessages";

export default function Gallery() {
  const t = useTranslations();
  return (
    <>
      <Seo
        title={t("gallery.title")}
        description={t("meta.gallery-description")}
      />
      <Navbar />
      <main className="section">
        <h1>{t("gallery.title")}</h1>
        <p className={styles.intro}>{t("gallery.intro")}</p>
        <ul className={styles.grid}>
          {GALLERY_PROJECTS.map(({ id, title, descriptionKey }) => (
            <GalleryProject
              key={id}
              id={id}
              title={title}
              description={t(`gallery.${descriptionKey}`)}
              viewLabel={t("gallery.view")}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { messages: await getMessages(locale) } };
}
