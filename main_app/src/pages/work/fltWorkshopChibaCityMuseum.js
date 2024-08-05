import styles from "@/src/styles/Home.module.css";
import Header from "@/src/components/Header";
import ThumbnailInWork from "@/src/components/ThumbnailInWork";
import Gallery from "@/src/components/Gallery";
import BackLinkInWork from "@/src/components/BackLinkInWork";
import WhiteBlockUnderHeader from "@/src/components/WhiteBlockUnderHeader";
import WORKS from "@/public/works.json"
import { getWorkInfoFromId, makeFilePathWithoutPublicPrefix } from "@/src/lib/fileUtils";
import WorkDescription from "@/src/components/WorkDescription";

const ID = "fltWorkshopChibaCityMuseum"

export default function fltWorkshopChibaCityMuseum(props) {

  const WORK = getWorkInfoFromId(WORKS, ID)
  const FILENAMES = props.filePaths

  return (
    <>
      <Header></Header>
      <WhiteBlockUnderHeader></WhiteBlockUnderHeader>
      <main className={`${styles.main}`}>
        <ThumbnailInWork
          image_path={`/thumbnail/${WORK.id}.jpg`}
          image_alt={WORK.title}
          title={WORK.title}
          year={WORK.year}
        />
        <WorkDescription
          description={WORK.description}
        />
        <Gallery
          fileNames={FILENAMES}
        />
        <BackLinkInWork></BackLinkInWork>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const glob = require('glob');

  const files = glob.sync( `./public/img/${ID}/*`);
  const filePaths = files.map(makeFilePathWithoutPublicPrefix)

  return {
    props: {
      filePaths: filePaths
    }
  };
};

