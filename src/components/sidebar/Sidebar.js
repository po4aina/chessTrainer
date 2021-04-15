import Heading from "../heading/Heading";
import Subtitle from "../subtitle/Subtitle";
import Link from "next/link";
import sidebarStyle from "./sidebar.module.css";

export default function Sidebar () {
  return (
    <sidebar className={sidebarStyle.sidebar}>
      <div>
        <Heading>
          Chess Trainer
        </Heading>
        <ul className={sidebarStyle.list}>
          <li>
            <Link href="#">
              <a className={sidebarStyle.link}>
                Find the quarter
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={sidebarStyle.link}>
                Learn the board
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={sidebarStyle.link}>
                Name the color
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={sidebarStyle.background}>

      </div>
    </sidebar>
  )
}