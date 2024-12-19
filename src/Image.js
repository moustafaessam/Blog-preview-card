import styles from "./Image.module.css";

function Image() {
  return (
    <img
      src="./blogImage.png"
      className={styles.img}
      alt="Description of the icon"
    />
  );
}

export default Image;
