import chessBoardStyle from "../chessBoard/chessBoard.module.css";
import Square from "../square/Square";

export default function ChessBoard() {
  return (
    <div className={chessBoardStyle.wrapper}>
      <div className={chessBoardStyle.chessBoardWrapper}>
        <div>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
        </div>
        <div>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
        </div>
        <div>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
        </div>
        <div>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
        </div>
        <div>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
        </div>
        <div>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
        </div>
        <div>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
        </div>
        <div>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
          <Square/>
          <Square isWhite={true}/>
        </div>
      </div>
    </div>
  );
}
