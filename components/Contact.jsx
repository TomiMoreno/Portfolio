import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Contact.module.css";
import ButtonIcon from "./ButtonIcon";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>¿Querés trabajar conmigo?</h2>
      <ButtonIcon
        href="https://linkedin/in/tomimoreno"
        imageURL="/linkedin.svg"
        imageAlt="LinkedIn"
      >
        Contactame
      </ButtonIcon>
    </div>
  );
}
