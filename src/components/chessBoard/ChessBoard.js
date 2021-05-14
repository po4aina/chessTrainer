import styles from './chessBoard.module.css';
import Square from '../square/Square';
import FindCoordinate from '../findCoordinate/FindCoordinate';

function renderChessBoard(onSquareClick) {
  const letters = 'ABCDEFGH';
  const chessBoard = [];
  for (let x = 8; x > 0; x--) {
    for (let y = 1; y < 9; y++) {
      const coordinate = letters[y - 1] + x;
      if ((x + y) % 2 === 0) {
        chessBoard.push(<Square text={coordinate} onClick={() => onSquareClick(coordinate)} />);
      } else {
        chessBoard.push(
          <Square
            text={coordinate}
            isWhite
            onClick={() => onSquareClick(coordinate)}
          />,
        );
      }
    }
  }
  return chessBoard;
}

export default function ChessBoard({ message, coordinate, onSquareClick }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <FindCoordinate
          message={message}
          coordinate={coordinate}
        />
        <div className={styles.chessBoardWrapper}>
          {renderChessBoard(onSquareClick)}
        </div>
      </div>
    </div>
  );
}
