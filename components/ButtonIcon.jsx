import styles from "../styles/components/ButtonIcon.module.css";
export default function ButtonIcon({ children, href, imageURL, className }) {
  return (
    <>
      <a href={href} className={`${styles.btn} ${className}`}>
        {children}
        <img src={imageURL} />
      </a>
    </>
  );
}
