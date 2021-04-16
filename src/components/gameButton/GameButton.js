import gameButtonStyle from "/gameButton.module.css";

export default function GameButton({children}) {
  return (
    <button className={gameButtonStyle.wrapper}>
      {children}
    </button>
  );
}