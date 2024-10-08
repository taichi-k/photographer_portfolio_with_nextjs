import styles from "@/src/styles/IndexMenu.module.css";
import Link from "next/link";
import MySignature from "./MySignature";

export default function IndexMenu(props) {
  const MENU_ITEMS = ["Works", "Me"]

  return (
    <div className={`${styles.index_menu} fadeIn3`}>
      <div className={styles.my_name}>
        <p>Taichi Kosugi</p>
        {/* <MySignature/> */}
      </div>
      <div>
        <ul className={styles.menu}>
          {MENU_ITEMS.map((menuItem, index) => {
            return (
              <li key={index} className={styles.menu_item}>
                <Link href={menuItem.toLowerCase()}>{menuItem}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
