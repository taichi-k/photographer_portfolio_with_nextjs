import styles from "@/src/styles/MainThumbnail.module.css";

export default function MainThumbnail(props) {
  return (
    <div className={styles.main_thumbnail__anchor}>
      <div className={styles.main_thumbnail}>
        <img
          src={props.imagePath}
          alt={props.imageAlt}
          className={styles.main_thumbnail__image}
        />
        <p className={`
          ${styles.main_thumbnail__title}
          ${props.blackTitle ? styles["main_thumbnail__title--black"] : styles["main_thumbnail__title--white"]}`}
        >
          {props.title}{props.year ? `（${props.year}）` : ""}
        </p>
      </div>
    </div>
  );
}
