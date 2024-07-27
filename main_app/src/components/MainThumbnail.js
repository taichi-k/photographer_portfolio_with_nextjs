import styles from "@/src/styles/MainThumbnail.module.css";

export default function MainThumbnail(props) {
  return (
    <div className={styles.main_thumbnail__anchor}>
      <div className={styles.main_thumbnail}>
        <img
          src={props.image_path}
          alt={props.image_alt}
          className={styles.main_thumbnail__image}
        />
        <p className={styles.main_thumbnail__title}>
          {props.title}{props.year ? `（${props.year}）` : ""}
        </p>
      </div>
    </div>
  );
}
