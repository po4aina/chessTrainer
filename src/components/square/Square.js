import squareStyles from "../square/square.module.css";

const classNames = require("classnames");

export default function Square({isWhite, onClick, text}) {
  let squareClasses = classNames({
    [squareStyles.square]: true,
    [squareStyles.white]: isWhite === true
  })
  return (
    <div className={squareClasses} onClick={onClick}>
      <span className={squareStyles.text}>{text}</span>
    </div>
  );
}