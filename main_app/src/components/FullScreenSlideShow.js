import styles from "@/src/styles/FullScreenSlideShow.module.css";

export default function FullScreenSlideShow(props) {
  return (
    <div>
      <img 
        src="/img/top.jpg" 
        alt="自画像" 
        className={styles.image}
      />
    </div>
  );
}
