import styles from "../square/square.module.css";

const classNames = require("classnames");

export default function Square({text, isWhite, onClick}) {
  let squareClasses = classNames({
    [styles.square]: true,
    [styles.white]: isWhite === true
  })
  return (
    <div className={squareClasses} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}