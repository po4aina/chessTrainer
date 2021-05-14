import styles from './square.module.css';

const classNames = require('classnames');

export default function Square({ text, isWhite, onClick }) {
  const squareClasses = classNames(styles.square, {
    [styles.white]: isWhite,
  });
  return (
    <button type="button" className={squareClasses} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
