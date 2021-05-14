import styles from ".//quarterBoard.module.css";
import FindCoordinate from "../findCoordinate/FindCoordinate";

export default function QuarterBoard({onQuarterClick, coordinate, message}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <FindCoordinate
          message={message}
          coordinate={coordinate}
        />
        <div className={styles.squareWrapper}>
          <div className={styles.square} onClick={() => onQuarterClick('1', coordinate)}>1</div>
          <div className={styles.square} onClick={() => onQuarterClick('2', coordinate)}>2</div>
          <div className={styles.square} onClick={() => onQuarterClick('3', coordinate)}>3</div>
          <div className={styles.square} onClick={() => onQuarterClick('4', coordinate)}>4</div>
        </div>
      </div>
    </div>
  );
}
