import styles from "@/src/styles/ThumbnailInWork.module.css";
import { shipporiMincho } from "@/src/utils/fonts";

export default function ThumbnailInWork(props) {
  return (
      <div className={`${styles.thumbnail_in_work} fadeIn1`}>
        <img
          src={props.image_path}
          alt={props.image_alt}
          className={styles.thumbnail_in_work__image}
        />
        <p className={styles.thumbnail_in_work__title}>
          {props.title}{props.year ? `（${props.year}）` : ""}
        </p>
      </div>
  );
}
