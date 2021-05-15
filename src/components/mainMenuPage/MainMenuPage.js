import Link from 'next/link';
import Head from 'next/head';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import styles from './mainMenuPage.module.css';

export default function MainMenuPage() {
  return (
    <>
      <Head>
        <title>
          Chess Trainer
        </title>
      </Head>
      <div className={styles.wrapper}>
        <Heading>
          Chess Trainer
        </Heading>
        <div className={styles.menuWrapper}>
          <Link href="/find-the-quarter">
            <a className={styles.link}>
              <img className={styles.icon} src="img/queen.svg" alt="" />
              <Button className={styles.button}>
                Find the quarter
              </Button>
              <img className={styles.icon} src="img/queen.svg" alt="" />
            </a>
          </Link>
          <Link href="/learn-the-board">
            <a className={styles.link}>
              <img className={styles.icon} src="/img/queen.svg" alt="" />
              <Button className={styles.button}>
                Learn the board
              </Button>
              <img className={styles.icon} src="/img/queen.svg" alt="" />
            </a>
          </Link>
          <Link href="/name-the-color">
            <a className={styles.link}>
              <img className={styles.icon} src="/img/queen.svg" alt="" />
              <Button className={styles.button}>
                Name the color
              </Button>
              <img className={styles.icon} src="/img/queen.svg" alt="" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.background} />
    </>
  );
}
