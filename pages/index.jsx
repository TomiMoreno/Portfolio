import { useTranslations } from "next-intl";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import { getProjects } from "../services/notionService";
import { getMessages } from "../utils/getMessages";

export default function Home({ projects }) {
  const t = useTranslations();
  return (
    <>
      <Seo
        title={t("header.fullstack-developer")}
        description={t("meta.description")}
      />
      <Navbar />
      <Header />
      <main>
        <Projects projects={projects} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: await getMessages(locale),
      projects: await getProjects(),
    },
    // Pick up Notion edits without a redeploy. If Notion is unreachable the
    // previously generated page keeps being served.
    revalidate: 3600,
  };
}
