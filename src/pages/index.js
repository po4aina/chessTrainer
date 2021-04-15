import Head from 'next/head'
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Chess Trainer
        </title>
      </Head>
      <Sidebar/>
    </>
  )
}
