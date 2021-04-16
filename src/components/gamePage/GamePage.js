import Sidebar from "../sidebar/Sidebar";
import Board from "../board/Board";
import pageStyle from ".//page.module.css";

export default function GamePage({children}) {
  return (
    <div className={pageStyle.wrapper}>
      <Sidebar>
        {children}
      </Sidebar>
      <Board/>
    </div>
  );
}