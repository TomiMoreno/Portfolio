import GalleryProject from "../components/GalleryProjects";
import Navbar from "../components/Navbar";

const GALLERY_PROJECTS = [
  {
    title: "Waves v1",
    description: "Some waves animated using perlin noise",
    src: "/waves-v1.html",
  },
  {
    title: "Waves v2",
    description: "Some waves animated using perlin noise",
    src: "/waves-v2.html",
  },
];

export default function Gallery() {
  return (
    <main>
      <Navbar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(600px, 1fr))",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {GALLERY_PROJECTS.map((project) => (
          <GalleryProject key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
