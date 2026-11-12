// Placeholder projects used in development when no Notion credentials are
// configured, so the site can be run without access to the CMS.
export const sampleProjects = [
  {
    id: "sample-1",
    title: "Sample project one",
    description:
      "Placeholder shown because NOTION_API_KEY is not set. Add your Notion credentials to .env.local to load the real projects.",
    titleEs: "Proyecto de ejemplo uno",
    descriptionEs:
      "Texto de ejemplo: falta NOTION_API_KEY. Agregá tus credenciales de Notion en .env.local para cargar los proyectos reales.",
    codeURL: "https://github.com/TomiMoreno",
    pageURL: "https://www.tomimoreno.com",
    technologies: [
      { id: "t1", name: "Next.js", color: "gray" },
      { id: "t2", name: "TypeScript", color: "blue" },
      { id: "t3", name: "Notion API", color: "yellow" },
    ],
  },
  {
    id: "sample-2",
    title: "Sample project two",
    description: "A project with source code but no live page.",
    titleEs: "Proyecto de ejemplo dos",
    descriptionEs: "Un proyecto con código pero sin página publicada.",
    codeURL: "https://github.com/TomiMoreno",
    pageURL: null,
    technologies: [
      { id: "t4", name: "React", color: "blue" },
      { id: "t5", name: "Solidity", color: "purple" },
    ],
  },
  {
    id: "sample-3",
    title: "Sample project three",
    description: "A project with a live page but no public code.",
    titleEs: "Proyecto de ejemplo tres",
    descriptionEs: "Un proyecto con página publicada pero sin código público.",
    codeURL: null,
    pageURL: "https://www.tomimoreno.com",
    technologies: [
      { id: "t6", name: "JavaScript", color: "yellow" },
      { id: "t7", name: "CSS", color: "pink" },
    ],
  },
  {
    id: "sample-4",
    title: "Sample project four",
    description: "A fourth one, to exercise the “show more” button.",
    titleEs: "Proyecto de ejemplo cuatro",
    descriptionEs: "Un cuarto proyecto, para probar el botón “ver más”.",
    codeURL: "https://github.com/TomiMoreno",
    pageURL: "https://www.tomimoreno.com",
    technologies: [{ id: "t8", name: "Node.js", color: "green" }],
  },
];
