import { useState } from 'react';
import GameLayout from '../gameLayout/GameLayout';
import Description from '../description/Description';
import ChessBoard from '../chessBoard/ChessBoard';
import styles from '../description/description.module.css';

function randomCoordinate() {
  const letter = 'ABCDEFGH';
  const i = Math.ceil(Math.random() * 8);
  const j = Math.ceil(Math.random() * 8);
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
      subtitle="Learn The Board"
      score={score}
    >
      <ChessBoard
        message={message}
        coordinate={coordinate}
        onSquareClick={handleSquareClick}
      />
      <Description>
        <p>
          It’s funny if you don’t understand how to play this game from its title.
        </p>
        <p>
          But if you really don’t, here it is:
        </p>
        <ul className={styles.list}>
          <li>
            Look above the board.
          </li>
          <li>
            Find the field where randomly generated coordinate is.
          </li>
        </ul>
      </Description>
    </GameLayout>
  );
}
