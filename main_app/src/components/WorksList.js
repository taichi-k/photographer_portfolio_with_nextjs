import styles from "@/src/styles/MainThumbnail.module.css";
import Link from "next/link";
import WORKS from "@/public/works.json"
import MainThumbnail from "../components/MainThumbnail";

export default function WorksList(props) {
  return (
    WORKS.map((work, index) => {
      return (
        <Link key={index} href={`work/${work.id}`} className={styles.main_thumbnail__anchor}>
          <MainThumbnail
            imagePath={`/thumbnail/${work.id}.jpg`}
            imageAlt={work.title}
            title={work.title}
            year={work.year ? `${work.year}` : null}
            blackTitle={work.blackTitle}
          />
        </Link> 
      )
    })
  );
}