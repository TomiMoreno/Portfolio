import Head from "next/head";
import Bubbles from "../components/Bubbles";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomás Canosa Moreno | Frontend Developer</title>
        <meta name="theme-color" content="#222831" />
        <meta
          name="description"
          content="Desarrollador frontend enfofacdo en React y Next"
        />
        <link rel="canonical" href="https://tomimoreno.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tomás Canosa Moreno" key="title" />
        <meta
          property="og:description"
          content="Desarrollador frontend enfocado en React y Next"
          key="description"
        />
        <meta property="og:locale" content="es_ES" key="locale" />
        <meta property="og:type" content="website" key="type" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.tomimoreno.com" />
        <meta lang="es" />
      </Head>
      <Bubbles />
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Contact/>
    </>
  );
}
