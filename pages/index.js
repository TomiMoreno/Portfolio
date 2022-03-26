import { useLocale, useTranslations } from "next-intl";
import Head from "next/head";
import Bubbles from "../components/Bubbles";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { getProjects } from "../services/notionService";

export default function Home({ projects }) {
  const t = useTranslations("meta");
  const locale = useLocale();
  return (
    <>
      <Head>
        <title>Tomás Canosa Moreno | Fullstack developer</title>
        <meta name="theme-color" content="#222831" />
        <meta name="description" content={t("description")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tomás Canosa Moreno" key="title" />
        <meta
          property="og:description"
          content={t("description")}
          key="description"
        />
        <meta property="og:locale" content={locale} key="locale" />
        <meta property="og:type" content="website" key="type" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.tomimoreno.com" />
      </Head>
      <Bubbles />
      <Navbar />
      <Header />
      <Projects projects={projects} />
      <Experience />
      <Contact />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const projects = await getProjects();
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
      projects,
    },
  };
}
