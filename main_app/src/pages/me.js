import styles from "@/src/styles/Home.module.css";
import Header from "../components/Header";
import MeComponent from "../components/MeComponent";

export default function Me() {
  return (
    <>
      <Header></Header>
      <main className={`${styles.main}`}>
        <MeComponent></MeComponent>
      </main>
    </>
  );
}
