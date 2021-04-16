import Head from "next/head";
import Heading from "../heading/Heading";
import Subtitle from "../subtitle/Subtitle";
import sidebarStyle from "../sidebar/sidebar.module.css";
import BackButton from "../backButton/backButton";

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
        <BackButton/>
      </div>
      <div className={sidebarStyle.background}>

      </div>
    </>
  );
}
