import Heading from "../heading/Heading";
import Link from "next/link";
import Button from "../button/Button";
import mainMenuStyle from "./mainMenu.module.css";

export default function mainMenu() {
  return (
    <>
      <div className={mainMenuStyle.wrapper}>
        <Heading>
          Chess Trainer
        </Heading>
        <div className={mainMenuStyle.menuWrapper}>
          <Link href="/find-the-quarter">
            <a className={mainMenuStyle.link}>
              <img className={mainMenuStyle.icon} src="img/queen.svg"/>
              <Button  className={mainMenuStyle.button}>
                Find the quarter
              </Button>
              <img className={mainMenuStyle.icon} src="img/queen.svg"/>
            </a>
          </Link>
          <Link href="/learn-the-board">
            <a className={mainMenuStyle.link}>
              <img className={mainMenuStyle.icon} src="/img/queen.svg"/>
              <Button  className={mainMenuStyle.button}>
                Learn the board
              </Button>
              <img className={mainMenuStyle.icon} src="/img/queen.svg"/>
            </a>
          </Link>
          <Link href="/name-the-color">
            <a className={mainMenuStyle.link}>
              <img className={mainMenuStyle.icon} src="/img/queen.svg"/>
              <Button  className={mainMenuStyle.button}>
                Name the color
              </Button>
              <img className={mainMenuStyle.icon} src="/img/queen.svg"/>
            </a>
          </Link>
        </div>
      </div>
      <div className={mainMenuStyle.background}>
      </div>
    </>
  );
}