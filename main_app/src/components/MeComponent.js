import styles from "@/src/styles/Me.module.css";
import SelfIntroductionBox from "./SelfIntroductionBox";

export default function MeComponent(props) {

  return (
    <div className={`${styles.me_contents} fadeIn2`}>
      <img
        src="/img/me.jpg"
        alt="自画像"
        className={styles.my_img}
      />
      <SelfIntroductionBox/>
    </div>
  );
}
