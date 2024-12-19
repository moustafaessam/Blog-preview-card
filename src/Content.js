import styles from "./Content.module.css";

function Content({ children }) {
  return <div className={styles.contentBox}>{children}</div>;
}

export default Content;
