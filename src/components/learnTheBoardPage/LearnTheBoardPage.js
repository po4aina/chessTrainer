import {useState} from "react";
import GameLayout from "../gameLayout/GameLayout";
import Description from "../description/Description";
import ChessBoard from "../chessBoard/ChessBoard";

function randomCoordinate() {
  let letter = 'ABCDEFGH';
  let i = Math.ceil(Math.random() * 8);
  let j = Math.ceil(Math.random() * 8);
  return letter[i - 1] + j;
}

export default function LearnTheBoardPage() {
  const [coordinate, setCoordinate] = useState(randomCoordinate());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Find the coordinate: ');

  function handleSquareClick(squareNumber) {
    if (squareNumber === coordinate) {
      setCoordinate(randomCoordinate());
      setScore(score + 1);
      setMessage('Very well!');
    } else {
      setMessage('Wrong, but nice try!');
      setScore(0);
    }
  }

  return (
    <GameLayout
      subtitle={"Learn The Board"}
      score={score}
    >
      <ChessBoard
        message={message}
        coordinate={coordinate}
        onSquareClick={handleSquareClick}
      />
      <Description/>
    </GameLayout>
  );
}