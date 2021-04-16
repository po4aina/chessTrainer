import Sidebar from "../sidebar/Sidebar";
import Board from "../board/Board";
import Description from "../description/Description";
import gameLayoutStyle from "../gameLayout/gameLayout.module.css";

export default function GameLayout({subtitle, score}) {
  return (
    <div className={gameLayoutStyle.wrapper}>
      <Sidebar
        className={gameLayoutStyle.wrapperChild}
        subtitle={subtitle}
        score={score}
      />
      <Board className={gameLayoutStyle.wrapperChild}/>
      <Description className={gameLayoutStyle.wrapperChild}/>
    </div>
  );
}