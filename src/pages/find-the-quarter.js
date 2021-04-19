import GameLayout from "../components/gameLayout/GameLayout";
import FindBoard from "../components/findBoard/FindBoard";
import Description from "../components/description/Description";
import React, { useState } from "react";

export default function FindTheQuarter() {
  const [btnText, setBtnText] = useState("Start");
  const [isStart, setIsStart] = useState(true);

  function handleClickBtn() {
    if (isStart) {
      setBtnText("Stop");
    } else {
      setBtnText("Start");
    }
    setIsStart(!isStart);
  }

  return (
    <GameLayout
    subtitle="Find the Quarter"
    score="15"
    btnText={btnText}
    onClickBtn={handleClickBtn}
    >
      <FindBoard isStart={isStart}/>
      <Description/>
    </GameLayout>
  );
}