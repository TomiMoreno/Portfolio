import ButtonIcon from "./ButtonIcon";
import styles from "../styles/components/Project.module.css";
import Technologies from "./Technologies";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projectVariants = {
  visible: { x: 0 },
  hiddenOdd: { x: "-30%" },
  hiddenEven: { x: "30%" },
};

export default function Project({
  name,
  description,
  codeURL,
  pageURL,
  imageURL,
  technologies,
  isOdd,
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        className={styles.split}
        ref={ref}
        animate={controls}
        variants={projectVariants}
        initial={isOdd ? "hiddenOdd" : "hiddenEven"}
      >
        <img src={imageURL} alt={name} className={styles.img} />
        <div className={styles.content}>
          <h2>{name}</h2> 
          <p>{description}</p>
          <Technologies technologies={technologies} />
          <div className={styles.btnContainer}>
            <ButtonIcon
              href={codeURL}
              imageAlt="Github logo"
              imageURL="/github.svg"
            >
              Visitar código
            </ButtonIcon>
            <ButtonIcon
              href={pageURL}
              imageAlt="Web logo"
              imageURL="/globe.svg"
            >
              Visitar página
            </ButtonIcon>
          </div>
        </div>
      </motion.div>
    </>
  );
}
