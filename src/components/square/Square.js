import squareStyles from "../square/square.module.css";

const classNames = require("classnames");

export default function Square({isWhite}) {
  let squareClasses = classNames({
    [squareStyles.square]: true,
    [squareStyles.white]: isWhite === true
  })
  return (
    <div className={squareClasses}></div>
  );
}