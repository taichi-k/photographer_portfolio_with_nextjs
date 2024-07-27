import styles from "@/src/styles/WorkDescription.module.css";
import { shipporiMincho } from "@/src/utils/fonts";
import React from "react";

export default function WorkDescription(props) {

  return (
    props.description ? 
      <div className={`${styles.description} ${shipporiMincho.className}`}>
        {props.description.split(/(\n)/).map((item, index) => {
          return (
            <React.Fragment key={index}>
              { item.match(/\n/) ? <br /> : item }
            </React.Fragment>
          );
        })}
      </div>
      : null
  );
}
