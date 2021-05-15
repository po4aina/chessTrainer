import styles from './description.module.css';

export default function Description({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paragraphWrapper}>
        {children}
      </div>
    </div>
  );
}
