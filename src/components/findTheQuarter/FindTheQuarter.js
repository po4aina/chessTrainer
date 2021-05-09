import {useState} from "react";
import GameLayout from "../gameLayout/GameLayout";
import FindBoard from "../findBoard/FindBoard";
import Description from "../description/Description";

function confirm(field, squareNumber) {
  //5678 ABCD(1234) - 1
  //5678 EFGH(5678) - 2
  //1234 ABCD(1234) - 3
  //1234 EFGH(5678) - 4
  let letters = 'ABCDEFGH';
  let numbers = '12345678';
  if (
    (letters.slice(0, 4).includes(field[0]) === true) &&
    (numbers.slice(4, 8).includes(field[1]) === true)
  ) {
    if (squareNumber === '1') {
      return true;
    }
  }
  if (
    (letters.slice(4, 8).includes(field[0]) === true) &&
    (numbers.slice(4, 8).includes(field[1]) === true)
  ) {
    if (squareNumber === '2') {
      return true;
    }
  }
  if (
    (letters.slice(0, 4).includes(field[0]) === true) &&
    (numbers.slice(0, 4).includes(field[1]) === true)
  ) {
    if (squareNumber === '3') {
      return true;
    }
  }
  if (
    (letters.slice(4, 8).includes(field[0]) === true) &&
    (numbers.slice(0, 4).includes(field[1]) === true)
  ) {
    if (squareNumber === '4') {
      return true;
    }
  }
  return false;
}

function randomCoordinate() {
  let letter = 'ABCDEFGH';
  let i = Math.ceil(Math.random() * 8);
  let j = Math.ceil(Math.random() * 8);
  return letter[i - 1] + j;
}

export default function FindTheQuarter() {
  const [coordinate, setCoordinate] = useState(randomCoordinate());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Find the coordinate: ');

  function handleQuarterClick(squareNumber, coordinate) {
    if (confirm(coordinate, squareNumber) === true) {
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
      subtitle={"Find the Quarter"}
      score={score}
    >
      <FindBoard
        onQuarterClick={handleQuarterClick}
        coordinate={coordinate}
        message={message}
      />
      <Description/>
    </GameLayout>
  );
}
