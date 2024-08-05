import styles from "@/src/styles/SelfIntroductionBox.module.css";
import Link from "next/link";
import { shipporiMincho } from "@/src/utils/fonts";

export default function SelfIntroductionBox(props) {
  return (
    <div className={`${styles.self_introduction_box} ${shipporiMincho.className}`}>
      <div>
        <p className={styles.sentence}>
          関東を拠点に、人の写真を撮っています。
        </p>
        <br/>
        <p className={styles.sentence}>
          ・ポートレート<br/>
          ・イベント撮影<br/>
          ・出張撮影
        </p>
        <br/>
        <p className={styles.sentence}>
          ご依頼・ご質問はお気軽にご連絡ください。
        </p>
        <p className={`${styles.sentence} ${styles.contacts}`}>
          <Link href="https://instagram.com/taichi_1219" target="_blank">Instagram</Link>{", "}
          no3b1219[at]gmail.com
        </p>
      </div>

      <div className={styles.signature}>
        小杉太一
      </div>
    </div>
  );
}
