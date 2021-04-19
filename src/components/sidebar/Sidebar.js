import Head from "next/head";
import Link from "next/link";
import Heading from "../heading/Heading";
import Subtitle from "../subtitle/Subtitle";
import Button from "../button/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CachedIcon from '@material-ui/icons/Cached';
import sidebarStyle from "../sidebar/sidebar.module.css";

export default function Sidebar({subtitle, score, btnText, onClickBtn}) {
  return (
    <>
      <Head>
        <title>
          {subtitle}
        </title>
      </Head>
      <div className={sidebarStyle.wrapper}>
        <Heading>
          Chess Trainer
        </Heading>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <div className={sidebarStyle.score}>
          <span>Best score: {score}</span>
          <CachedIcon className={sidebarStyle.refreshIcon}/>
        </div>
        <Button className={sidebarStyle.button} onClick={onClickBtn}>
          {btnText}
        </Button>
        <Link href="/">
          <a>
            <Button variant="transparent">
              <ArrowRightAltIcon className={sidebarStyle.icon}/>
              Back
            </Button>
          </a>
        </Link>
      </div>
      <div className={sidebarStyle.background}>

      </div>
    </>
  );
}
