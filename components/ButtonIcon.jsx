import styles from "../styles/components/ButtonIcon.module.css";
export default function ButtonIcon({
  children,
  href,
  imageURL,
  imageAlt,
  className,
  ...props
}) {
  return (
    <>
      {!!href ? (
        <a href={href} className={`${styles.btn} ${className}`} {...props}>
          <span>{children}</span>
          <img src={imageURL} alt={imageAlt} />
        </a>
      ) : (
        <button className={`${styles.btn} ${className}`} {...props}>
          <span>{children}</span>
          <img src={imageURL} alt={imageAlt}/>
        </button>
      )}
    </>
  );
}
