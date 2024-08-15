import styles from "@/src/styles/Gallery.module.css";
import GalleryImage from "./GalleryImage";
import { useEffect } from "react";
import FullScreenImage from "./FullScreenImage";
import { createRoot } from 'react-dom/client';


export default function Gallery(props) {

  const showImage = (e) => {
    const my_container = document.querySelector(".my_container")
    createRoot(my_container).render(
      <FullScreenImage
        fileName={e.target.src}
      />
    )
  }

  const createImageView = () => {
    let element = document.createElement("div");
    element.classList = ["my_container"]
    if (document.querySelectorAll(".my_container").length == 0){
      document.body.appendChild(element)
    }
  }

  const removeImageView = () => {
    [...document.querySelectorAll(".my_container")].map((elem) => {
      elem.remove()
    })
  }

  useEffect(() => {
    createImageView();
    return () => {
      removeImageView();
    }
  }, [])

  return (
    <div className={styles.gallery}>
      {props.fileNames.map((fileName, index) => {
        return (
          <button key={index} onClick={showImage} className={`${styles.image_button} fadeIn1`}>
            <GalleryImage
              fileName={fileName}
            />
          </button>
        )
      })}
    </div>
  );
}
