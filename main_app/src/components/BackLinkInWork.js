import styles from "@/src/styles/BackLinkInWork.module.css";
import Link from "next/link";

export default function BackLinkInWork(props) {
  return (
    <div className={`${styles.link} fadeIn1`}>
      <Link href="/works">◀︎ 戻る</Link>
    </div>
  );
}
