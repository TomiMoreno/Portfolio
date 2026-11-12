import styles from "../styles/components/ButtonIcon.module.css";

// Renders a link when `href` is given, otherwise a button. The icon is
// decorative: the visible label already names the action.
export default function ButtonIcon({
  children,
  href,
  imageURL,
  className = "",
  external = false,
  ...props
}) {
  const classes = `${styles.btn} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {imageURL && <img src={imageURL} alt="" width={20} height={20} />}
    </>
  );
  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
