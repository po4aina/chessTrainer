import BigSquare from "../bigSquare/BigSquare";
import findBoardStyle from "../findBoard/findBoard.module.css";
import FindCoordinate from "../findCoordinate/FindCoordinate";

export default function FindBoard({onQuarterClick, coordinate, message}) {
  return (
    <div className={findBoardStyle.wrapper}>
      <div className={findBoardStyle.wrapper}>
        <FindCoordinate
          message={message}
          coordinate={coordinate}
        />
        <div className={findBoardStyle.squareWrapper}>
          <BigSquare text={1} onClick={() => onQuarterClick('1', coordinate)}/>
          <BigSquare text={2} onClick={() => onQuarterClick('2', coordinate)}/>
          <BigSquare text={3} onClick={() => onQuarterClick('3', coordinate)}/>
          <BigSquare text={4} onClick={() => onQuarterClick('4', coordinate)}/>
        </div>
      </div>
    </div>
  );
}
