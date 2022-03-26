import ButtonIcon from "./ButtonIcon";
import styles from "../styles/components/Project.module.css";
import Technologies from "./Technologies";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const projectVariants = {
  visible: { x: 0 },
  hiddenOdd: { x: "-30%" },
  hiddenEven: { x: "30%" },
};

export default function Project({
  title,
  titleEs,
  description,
  descriptionEs,
  codeURL,
  pageURL,
  imageURL,
  technologies = [],
  isOdd,
}) {
  const { locale } = useRouter();
  const t = useTranslations("projects");
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const controls = useAnimation();
  const translatedTitle = locale === "es" ? titleEs : title;
  const translatedDescription = locale === "es" ? descriptionEs : description;

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
        <div className={styles.imgContainer}>
          <Image layout="fill" src={imageURL} alt={translatedTitle} />
        </div>
        <div className={styles.content}>
          <h2>{translatedTitle}</h2>
          <p>{translatedDescription}</p>
          <Technologies technologies={technologies} />
          <div className={styles.btnContainer}>
            <ButtonIcon
              href={codeURL}
              imageAlt="Github logo"
              imageURL="/github.svg"
            >
              {t("visit-code")}
            </ButtonIcon>
            <ButtonIcon
              href={pageURL}
              imageAlt="Web logo"
              imageURL="/globe.svg"
            >
              {t("visit-page")}
            </ButtonIcon>
          </div>
        </div>
      </motion.div>
    </>
  );
}
