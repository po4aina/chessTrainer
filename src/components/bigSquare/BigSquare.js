import bigSquareStyle from "../bigSquare/bigSquare.module.css";

export default function BigSquare({text}) {
  return (
    <div className={bigSquareStyle.square}>
      {text}
    </div>
  );
}