import Project from "./Project"
import styles from "../styles/components/Projects.module.css"
import SvgCurve from "./SvgCurve"
import { projectList } from "../data/Projects"

export default function Projects() {
  
  return (<>

    <main className={styles.proyectos} id="proyectos">
      <h1 className={styles.title} >Mis proyectos</h1>
      <div className={styles.container}>
        {projectList.map((project, i) => <Project isOdd={i % 2 === 1} key={`project-${i}`} {...project} />)}
      </div>
      <SvgCurve color="#000" background="#fff" />
    </main>
  </>)
}