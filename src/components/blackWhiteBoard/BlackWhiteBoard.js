import classNames from 'classnames';
import styles from './blackWhiteBoard.module.css';
import FindCoordinate from '../findCoordinate/FindCoordinate';

export default function BlackWhiteBoard({ message, coordinate, onSquareClick }) {
  const blackSquareClasses = classNames(styles.square, styles.white);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <FindCoordinate
          message={message}
          coordinate={coordinate}
        />
        <div className={styles.squareWrapper}>
          <button type="button" className={blackSquareClasses} onClick={() => onSquareClick('WHITE')}>WHITE</button>
          <button type="button" className={styles.square} onClick={() => onSquareClick('BLACK')}>BLACK</button>
        </div>
      </div>
    </div>
  );
}
