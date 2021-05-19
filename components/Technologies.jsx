import styles from '../styles/components/Technologies.module.css'
import { technologiesList } from '../data/Projects'

export default function Technologies({ technologies = [] }) {

  return (
    <div className={styles.container}>
      {technologies.map((tec, i) =>
        technologiesList[tec]
        && <img
          src={technologiesList[tec].src}
          className={styles.techLogo}
          alt={technologiesList[tec].name}
          title={technologiesList[tec].name}
          key={`technology-${i}`} />)}
    </div>
  )
}

