import styles from "@/src/styles/GalleryImage.module.css";

export default function GalleryImage(props) {
  return (
    <div className={styles.image_box}>
      <img
        src={props.fileName}
        alt="画像"
        className={styles.image_box}
      />
    </div>
  );
}
