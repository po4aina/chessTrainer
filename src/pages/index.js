import Head from 'next/head';
import MainMenu from "../components/mainMenu/MainMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Chess Trainer
        </title>
      </Head>
      <MainMenu/>
    </>
  );
}
