import chessBoardStyle from "../chessBoard/chessBoard.module.css";
import Square from "../Square/Square.js";
import FindCoordinate from "../findCoordinate/FindCoordinate";

function renderRow(letter, onSquareClick, isOdd = true) {
  let odd =
    <div>
      <Square text={letter + 8} isWhite={true} onClick={() => onSquareClick(letter + 8)}/>
      <Square text={letter + 7} onClick={() => onSquareClick(letter + 7)}/>
      <Square text={letter + 6} isWhite={true} onClick={() => onSquareClick(letter + 6)}/>
      <Square text={letter + 5} onClick={() => onSquareClick(letter + 5)}/>
      <Square text={letter + 4} isWhite={true} onClick={() => onSquareClick(letter + 4)}/>
      <Square text={letter + 3} onClick={() => onSquareClick(letter + 3)}/>
      <Square text={letter + 2} isWhite={true} onClick={() => onSquareClick(letter + 2)}/>
      <Square text={letter + 1} onClick={() => onSquareClick(letter + 1)}/>
    </div>;
  let even =
    <div>
      <Square text={letter + 8} onClick={() => onSquareClick(letter + 8)}/>
      <Square text={letter + 7} isWhite={true} onClick={() => onSquareClick(letter + 7)}/>
      <Square text={letter + 6} onClick={() => onSquareClick(letter + 6)}/>
      <Square text={letter + 5} isWhite={true} onClick={() => onSquareClick(letter + 5)}/>
      <Square text={letter + 4} onClick={() => onSquareClick(letter + 4)}/>
      <Square text={letter + 3} isWhite={true} onClick={() => onSquareClick(letter + 3)}/>
      <Square text={letter + 2} onClick={() => onSquareClick(letter + 2)}/>
      <Square text={letter + 1} isWhite={true} onClick={() => onSquareClick(letter + 1)}/>
    </div>;
  return isOdd ? odd : even;
}

export default function ChessBoard({message, coordinate, onSquareClick}) {
  return (
    <div className={chessBoardStyle.wrapper}>
      <div className={chessBoardStyle.wrapper}>
        <FindCoordinate
          message={message}
          coordinate={coordinate}
        />
        <div className={chessBoardStyle.chessBoardWrapper}>
          {renderRow('A', onSquareClick)}
          {renderRow('B', onSquareClick, false)}
          {renderRow('C', onSquareClick)}
          {renderRow('D', onSquareClick, false)}
          {renderRow('E', onSquareClick)}
          {renderRow('F', onSquareClick, false)}
          {renderRow('G', onSquareClick)}
          {renderRow('H', onSquareClick, false)}
        </div>
      </div>
    </div>
  );
}
