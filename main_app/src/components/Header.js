import styles from "@/src/styles/Header.module.css";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import { shipporiMincho, mPlusRounded1C, bodoniModa, quicksand, jost, cormorantGaramond, shadowsIntoLight, nanumMyeongjo, catamaran, cinzel, vollkorn, myFont } from "@/src/utils/fonts";


export default function Header(props) {
  const MENU_ITEMS = ["Works", "Me"]

  return (
    <div className={styles.header}>
      <HeaderLogo></HeaderLogo>
      <div className={styles.menu}>
        <ul>
          {MENU_ITEMS.map((menuItem, index) => {
            return (
              <li key={index} className={`${styles.header__menu_item} ${myFont.className}`}>
                <Link href={`/${menuItem.toLowerCase()}`}>{menuItem}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
