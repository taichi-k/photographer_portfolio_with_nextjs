import styles from "@/src/styles/Index.module.css";
import IndexMenu from "../components/IndexMenu";
import FullScreenSlideShow from "../components/FullScreenSlideShow";

export default function Index() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className={styles.wrapper}>
          <FullScreenSlideShow></FullScreenSlideShow>
          <IndexMenu></IndexMenu>
        </div>
      </main>
    </>
  );
}
