import bigSquareStyle from "../bigSquare/bigSquare.module.css";

const classNames = require('classnames');

export default function BigSquare({color, text, onClick}) {
  let bigSquareClasses = classNames({
    [bigSquareStyle.square]: true,
    [bigSquareStyle.color]: color === 'white'
  })
  return (
    <div className={bigSquareClasses} onClick={onClick}>
      {text}
    </div>
  );
}