import { useState } from 'react';
import BlackWhiteBoard from '../blackWhiteBoard/BlackWhiteBoard';
import GameLayout from '../gameLayout/GameLayout';
import Description from '../description/Description';
import styles from '../description/description.module.css';
import { randomCoordinate } from "../../common/utils";

export default function NameTheColorPage() {
  const [coordinate, setCoordinate] = useState(randomCoordinate());
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Find the coordinate: ');

  function handleSquareClick(color) {
    const letter = 'ABCDEFGH';
    const black = (letter.indexOf([coordinate[0]]) + Number(coordinate[1]) + 1) % 2 === 0 ? 'BLACK' : 'WHITE';
    if (black === color) {
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
      subtitle="Name the Color"
      score={score}
    >
      <BlackWhiteBoard
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
            Choose the square with proper color of coordinate.
          </li>
        </ul>
      </Description>
    </GameLayout>
  );
}
