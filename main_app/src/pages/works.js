import styles from "@/src/styles/Home.module.css";
import Header from "../components/Header";
import WorksList from "../components/WorksList";

export default function Works() {
  return (
    <>
      <Header></Header>
      <main className={`${styles.main}`}>
        <WorksList></WorksList>
      </main>
    </>
  );
}