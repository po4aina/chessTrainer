import Head from "next/head";
import Link from "next/link";
import Heading from "../heading/Heading";
import Subtitle from "../subtitle/Subtitle";
import Button from "../button/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import sidebarStyle from "../sidebar/sidebar.module.css";

export default function Sidebar({children}) {
  return (
    <>
      <Head>
        <title>
          {children}
        </title>
      </Head>
      <div className={sidebarStyle.wrapper}>
        <Heading>
          Chess Trainer
        </Heading>
        <Subtitle>
          {children}
        </Subtitle>
        <Button>
          Start
        </Button>
        <Link href="/">
          <a className={sidebarStyle.link}>
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
