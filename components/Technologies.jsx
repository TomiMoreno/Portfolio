import styles from "../styles/components/Technologies.module.css";

const tagColorToHex = {
  default: "#e3e2e080",
  gray: "#e3e2e0",
  brown: "#eee0da",
  orange: "#fadec9",
  yellow: "#fdecc8",
  green: "#dbeddb",
  blue: "#d3e5ef",
  purple: "#e8deee",
  pink: "#f5e0e9",
  red: "#ffe2dd",
};

export default function Technologies({ technologies = [] }) {
  return (
    <div className={styles.container}>
      {technologies.map(({ name, color, id }, i) => (
        <div
          key={id}
          className={styles.technology}
          style={{ background: tagColorToHex[color] }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
