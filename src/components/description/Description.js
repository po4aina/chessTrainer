import styles from './description.module.css';

export default function Description() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paragraphWrapper}>
        <p>
          It’s funny if you don’t understand how to play this game from its title.
        </p>
        <p>
          But if you really don’t, here it is:
        </p>
        <ul className={styles.list}>
          <li>
            Click “Start”.
          </li>
          <li>
            Find the quarter where randomly generated coordinate is.
          </li>
        </ul>
      </div>
    </div>
  );
}
