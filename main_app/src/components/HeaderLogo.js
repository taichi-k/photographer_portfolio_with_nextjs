import styles from "@/src/styles/Header.module.css";
import Link from "next/link";
import MySignature from "./MySignature";

export default function HeaderLogo(props) {
  return (
    <div className={styles.header__logo}>
      <Link href="/">
        {/* Taichi Kosugi */}
        <MySignature></MySignature>
      </Link>
    </div>
  );
}
