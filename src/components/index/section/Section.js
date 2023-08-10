import styles from "./styles.module.css";

function Section() {
  return (
    <section className={styles.section}>
      <div className={styles.section__div}>
        <h3 className={styles["section__header--third"]}>Boilerplate</h3>
        <h2 className={styles["section__header--second"]}>Boilerplate</h2>
        <h1 className={styles["section__header--first"]}>Boilerplate</h1>
      </div>
    </section>
  );
}

export default Section;
