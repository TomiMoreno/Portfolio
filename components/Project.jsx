import ScrollAnimation from "react-animate-on-scroll"
import ButtonIcon from "./ButtonIcon"
import styles from '../styles/components/Project.module.css'
import Technologies from "./Technologies"

export default function Project({ name, description, codeURL, pageURL, imageURL, technologies, isOdd }) {

  return <>
    <ScrollAnimation className={styles.split} initiallyVisible={false} duration={1} animateOnce={true} animateIn={`slide${isOdd ? 'Right' : 'Left'}`}>
      <img src={imageURL} alt={name} className={styles.img} />
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Technologies technologies={technologies} />
        <div className={styles.btnContainer} >
          <ButtonIcon href={codeURL} imageURL="/github.svg">Visitar código</ButtonIcon>
          <ButtonIcon href={pageURL} imageURL="/globe.svg">Visitar página</ButtonIcon>
        </div>
      </div>
    </ScrollAnimation>
  </>
}