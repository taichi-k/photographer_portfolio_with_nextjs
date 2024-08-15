import styles from "@/src/styles/Header.module.css";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

export default function Header(props) {
  const MENU_ITEMS = ["Works", "Me"]

  return (
    <div className={styles.header}>
      <HeaderLogo></HeaderLogo>
      <div className={styles.menu}>
        <ul>
          {MENU_ITEMS.map((menuItem, index) => {
            return (
              <li key={index} className={styles.header__menu_item}>
                <Link href={`/${menuItem.toLowerCase()}`}>{menuItem}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
