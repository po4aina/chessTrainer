import Sidebar from "../sidebar/Sidebar";
import gameLayoutStyle from "../gameLayout/gameLayout.module.css";

export default function GameLayout({subtitle, score, children}) {
  return (
    <div className={gameLayoutStyle.wrapper}>
      <Sidebar
        className={gameLayoutStyle.wrapper}
        subtitle={subtitle}
        score={score}
      />
      {children}
    </div>
  );
}