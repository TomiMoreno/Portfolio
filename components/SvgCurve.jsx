import styles from "../styles/components/SvgCurve.module.css";
export default function svgCurve() {
  return (
    <svg viewBox="0 0 1440 320" className={styles.curve}>
      <path
        fillOpacity="1"
        d="M0,224L40,240C80,256,160,288,240,256C320,224,400,128,480,117.3C560,107,640,181,720,218.7C800,256,880,256,960,218.7C1040,181,1120,107,1200,96C1280,85,1360,139,1400,165.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>
  );
}
