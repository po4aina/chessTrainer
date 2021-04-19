import FindBoard from "../findBoard/FindBoard";
import Description from "../description/Description";
import GameLayout from "../gameLayout/GameLayout";
import React, {useState} from "react";

export default function FindTheQuarter() {


  return (
    <GameLayout
      subtitle="Find the Quarter"
      score="15"
    >

      <FindBoard/>
      <Description/>
    </GameLayout>
  );
}