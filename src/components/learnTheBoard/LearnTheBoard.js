import {useState} from "react";
import GameLayout from "../gameLayout/GameLayout";
import Description from "../description/Description";
import ChessBoard from "../chessBoard/ChessBoard";

export default function LearnTheBoard() {
  return (
    <GameLayout
      subtitle={"Find the Quarter"}
      score={0}
    >
      <ChessBoard/>
      <Description/>
    </GameLayout>
  );
}