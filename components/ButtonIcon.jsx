import styles from "../styles/components/ButtonIcon.module.css";
export default function ButtonIcon({
  children,
  href,
  imageURL,
  className,
  ...props
}) {
  console.log(href);
  return (
    <>
      {!!href ? (
        <a href={href} className={`${styles.btn} ${className}`} {...props}>
          <span>{children}</span>
          <img src={imageURL} />
        </a>
      ) : (
        <button className={`${styles.btn} ${className}`} {...props}>
          <span>{children}</span>
          <img src={imageURL} />
        </button>
      )}
    </>
  );
}
