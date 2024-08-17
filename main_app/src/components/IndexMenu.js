import styles from "@/src/styles/IndexMenu.module.css";
import Link from "next/link";
import MySignature from "./MySignature";
import { shipporiMincho, mPlusRounded1C, bodoniModa, quicksand, jost, cormorantGaramond, shadowsIntoLight, nanumMyeongjo, catamaran, cinzel, vollkorn, myFont } from "@/src/utils/fonts";


export default function IndexMenu(props) {
  const MENU_ITEMS = ["Works", "Me"]

  return (
    <div className={`${styles.index_menu} fadeIn3`}>
      <div className={styles.my_name}>
        {/* <p>Taichi Kosugi</p> */}
        <MySignature/>
      </div>
      <div>
        <ul className={styles.menu}>
          {MENU_ITEMS.map((menuItem, index) => {
            return (
              <li key={index} className={`${styles.menu_item} ${myFont.className}`}>
                <Link href={menuItem.toLowerCase()}>{menuItem}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
