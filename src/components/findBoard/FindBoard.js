import BigSquare from "../bigSquare/BigSquare";
import findBoardStyle from "../findBoard/findBoard.module.css";

const classNames = require('classnames');

export default function FindBoard({isStart}) {
  let findBoardClasses = classNames({
    [findBoardStyle.squareWrapper]: true,
    [findBoardStyle.blur]: isStart === true
  });

  function handleClick() {
    if (isStart === false) {
      alert('click!');
    }
  }

  return (
    <div className={findBoardStyle.wrapper}>
      <div className={findBoardClasses}>
        <BigSquare text={1} onClick={handleClick}/>
        <BigSquare text={2} onClick={handleClick}/>
        <BigSquare text={3} onClick={handleClick}/>
        <BigSquare text={4} onClick={handleClick}/>
      </div>
    </div>
  );
}