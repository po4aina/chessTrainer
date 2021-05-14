import BlackWhiteBoard from "../blackWhiteBoard/BlackWhiteBoard";
import GameLayout from "../gameLayout/GameLayout";
import Description from "../description/Description";
import {useState} from "react";

function randomCoordinate() {
  let letter = 'ABCDEFGH';
  let i = Math.ceil(Math.random() * 8);
  let j = Math.ceil(Math.random() * 8);
  return letter[i - 1] + j;
}

export default function NameTheColorPage() {
  const [coordinate, setCoordinate] = useState(randomCoordinate());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Find the coordinate: ');

  function handleSquareClick() {
    let letter = 'ABCDEFGH';
    if ((letter.indexOf(coordinate[0]) + 1 + Number(coordinate[1])) % 2 === 0) {
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
      subtitle={"Name the Color"}
      score={score}
    >
      <BlackWhiteBoard
        message={message}
        coordinate={coordinate}
        onSquareClick={handleSquareClick}
      />
      <Description/>
    </GameLayout>
  );
}