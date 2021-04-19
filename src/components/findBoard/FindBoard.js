import BigSquare from "../bigSquare/BigSquare";
import findBoardStyle from "../findBoard/findBoard.module.css";

export default function FindBoard() {
  function handleClick() {
    alert('click!');
  }
  return (
    <div className={findBoardStyle.wrapper}>
      <div className={findBoardStyle.squareWrapper}>
        <BigSquare text={1} onClick={handleClick}/>
        <BigSquare text={2} onClick={handleClick}/>
        <BigSquare text={3} onClick={handleClick}/>
        <BigSquare text={4} onClick={handleClick}/>
      </div>
    </div>
  );
}
