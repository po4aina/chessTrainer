import BigSquare from "../bigSquare/BigSquare";
import boardStyle from "../board/board.module.css";

export default function Board() {
  return (
    <div className={boardStyle.wrapper}>
      <div className={boardStyle.squareWrapper}>
        <BigSquare text={1}/>
        <BigSquare text={2}/>
        <BigSquare text={3}/>
        <BigSquare text={4}/>
      </div>
    </div>
  );
}