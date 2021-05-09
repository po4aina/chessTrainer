import Sidebar from "../sidebar/Sidebar";
import FindBoard from "../findBoard/FindBoard";
import Description from "../description/Description";
import gameLayoutStyle from "../gameLayout/gameLayout.module.css";

export default function GameLayout({subtitle, score, coordinate, message, onQuarterClick}) {
  return (
    <div className={gameLayoutStyle.wrapper}>
      <Sidebar
        className={gameLayoutStyle.wrapperChild}
        subtitle={subtitle}
        score={score}
      />
      <FindBoard
        onQuarterClick={onQuarterClick}
        coordinate={coordinate}
        message={message}
      />
      <Description/>
    </div>
  );
}