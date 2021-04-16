import Sidebar from "../sidebar/Sidebar";
import Board from "../board/Board";
import gameLayoutStyle from "./gameLayout.module.css";

export default function GameLayout({subtitle, score}) {
  return (
    <div className={gameLayoutStyle.wrapper}>
      <Sidebar
      subtitle={subtitle}
      score={score}
      />
      <Board/>
    </div>
  );
}