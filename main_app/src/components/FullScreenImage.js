import styles from "@/src/styles/FullScreenImage.module.css";

export default function FullScreenImage(props) {

  const removeSelf = () => {
    const selfElem = document.querySelector("#fullScreenImage")
    selfElem.remove()
  }

  return (
    <div className={styles.fixed_wrapper} id="fullScreenImage" onClick={removeSelf}>
      <div className={styles.relative_wrapper}>
        <img
          src={props.fileName}
          alt="画像"
          className={styles.image}
        />
      </div>
    </div>
  );
}
