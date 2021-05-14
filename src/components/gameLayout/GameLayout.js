import styles from "../gameLayout/gameLayout.module.css";
import Sidebar from "../sidebar/Sidebar";

export default function GameLayout({subtitle, score, children}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar
        className={styles.wrapper}
        subtitle={subtitle}
        score={score}
      />
      {children}
    </div>
  );
}