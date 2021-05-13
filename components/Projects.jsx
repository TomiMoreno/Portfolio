import Project from "./Project"
import styles from "../styles/components/Projects.module.css"
import SvgCurve from "./SvgCurve"

export default function Projects() {
  const projectList = [{
    name: 'Btree',
    codeURL: 'https://github.com/TomiMoreno/btree',
    description: 'Aplicación interactiva de vizualización de árboles binarios.',
    pageURL: 'https:/btree.vercel.app',
    imageURL: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png',
  },
  {
    name: 'PreceBOT',
    codeURL: '',
    description: 'Descripcion descripcion Descripcion descripcion Descripcion descripcion Descripcion descripcion Descripcion descripcion ',
    pageURL: '',
    imageURL: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png',
  }]
  return (<>

    <main className={styles.proyectos} id="proyectos">
      <h1 className={styles.title} >Mis proyectos</h1>
      <div className={styles.container}>
        {projectList.map((project, i) => <Project isOdd={i % 2 === 1} key={`project-${i}`} {...project} />)}
      </div>
    </main>
    <SvgCurve color="#000" background="#fff" />
  </>)
}