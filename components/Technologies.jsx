import styles from '../styles/components/Technologies.module.css'
import { technologiesList } from '../data/Projects'

export default function Technologies({technologies =[]}) {
  
  return (
    <div className={styles.container}>
      {technologies.map(tec => 
        technologiesList[tec] 
        && <img 
          src={technologiesList[tec].src} 
          className={styles.techLogo} 
          alt={technologiesList[tec].name}/>)}
    </div>
  )
}

