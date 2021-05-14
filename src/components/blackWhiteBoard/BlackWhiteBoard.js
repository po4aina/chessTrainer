import styles from "../blackWhiteBoard/blackWhiteBoard.module.css";
import FindCoordinate from "../findCoordinate/FindCoordinate";
import classNames from "classnames";

export default function BlackWhiteBoard({message, coordinate, onSquareClick}) {
  let blackSquareClasses = classNames({
    [styles.square]: true,
    [styles.white]: true
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <FindCoordinate
          message={message}
          coordinate={coordinate}
        />
        <div className={styles.squareWrapper}>
          <div className={blackSquareClasses} onClick={onSquareClick}>WHITE</div>
          <div className={styles.square} onClick={onSquareClick}>BLACK</div>
        </div>
      </div>
    </div>
  );
}
