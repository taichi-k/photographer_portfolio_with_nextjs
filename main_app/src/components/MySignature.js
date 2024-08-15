import styles from "@/src/styles/MySignature.module.css";

export default function MySignature(props) {
  return (
    <div className={styles.my_signature}>
      <img
        src="/img/taichikosugi.png"
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
