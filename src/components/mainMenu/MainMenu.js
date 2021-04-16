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
            <a>
              <Button variant="outlined">
                Find the quarter
              </Button>
            </a>
          </Link>
          <Link href="/learn-the-board">
            <a>
              <Button variant="outlined">
                Learn the board
              </Button>
            </a>
          </Link>
          <Link href="/name-the-color">
            <a>
              <Button variant="outlined">
                Name the color
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={mainMenuStyle.background}>
      </div>
    </>
  );
}