import { useTranslations } from "next-intl";
import Link from "next/link";
import Seo from "../../components/Seo";
import styles from "../../styles/components/GalleryProject.module.css";
import { GALLERY_PROJECTS } from "../../utils/galleryProjects";
import { getMessages } from "../../utils/getMessages";

export default function GalleryProjectPage({ id, title }) {
  const t = useTranslations("gallery");
  return (
    <main className={styles.fullscreen}>
      <Seo title={title} description={title} noindex />
      <Link href="/gallery" className={styles.back} aria-label={t("back")}>
        <img src="/back.svg" alt="" width={24} height={24} />
      </Link>
      <iframe src={`/${id}`} title={title} />
    </main>
  );
}

// Only known sketches get a page: the id is used as an iframe URL, so it must
// never come straight from the address bar.
export async function getStaticPaths({ locales }) {
  return {
    paths: locales.flatMap((locale) =>
      GALLERY_PROJECTS.map(({ id }) => ({ params: { id }, locale }))
    ),
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const { id, title } = GALLERY_PROJECTS.find(({ id }) => id === params.id);
  return { props: { id, title, messages: await getMessages(locale) } };
}
