import styles from "./Text.module.css";
function Text() {
  return (
    <>
      <div className={styles.textBox}>
        <div className={styles.tag}>Learning</div>
        <div className={styles.date}>Published 21 Dec 2023</div>
        <h3 className={styles.header}>HTML & CSS foundations</h3>
        <p className={styles.paragraph}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className={styles.footer}>
        <img src="./avatar.png" className={styles.avatar} />
        <span>Greg Hooper</span>
      </div>
    </>
  );
}

export default Text;
