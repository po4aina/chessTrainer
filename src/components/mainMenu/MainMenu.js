import Heading from "../heading/Heading";
import Link from "next/link";
import mainMenuStyle from "./mainMenu.module.css";

export default function mainMenu () {
  return (
    <>
      <div className={mainMenuStyle.wrapper}>
        <Heading>
          Chess Trainer
        </Heading>
        <ul className={mainMenuStyle.list}>
          <li>
            <Link href="/find-the-quarter">
              <a className={mainMenuStyle.link}>
                Find the quarter
              </a>
            </Link>
          </li>
          <li>
            <Link href="/learn-the-board">
              <a className={mainMenuStyle.link}>
                Learn the board
              </a>
            </Link>
          </li>
          <li>
            <Link href="/name-the-color">
              <a className={mainMenuStyle.link}>
                Name the color
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={mainMenuStyle.background}>
      </div>
    </>
  );
}