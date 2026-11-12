import styles from "../styles/components/Technologies.module.css";

// Notion's select colours, in the tones Notion uses on dark backgrounds.
const tagColors = {
  default: "#d4d4d4",
  gray: "#c8c8c8",
  brown: "#d9a48c",
  orange: "#f0a868",
  yellow: "#e9c46a",
  green: "#7fcf9a",
  blue: "#7fb8e6",
  purple: "#b99be6",
  pink: "#e68fc0",
  red: "#f0867d",
};

export default function Technologies({ technologies }) {
  if (!technologies?.length) return null;
  return (
    <ul className={styles.container}>
      {technologies.map(({ name, color, id }) => (
        <li
          key={id}
          className={styles.technology}
          style={{ "--tag": tagColors[color] ?? tagColors.default }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
