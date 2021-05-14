import styles from "../findCoordinate/findCoordinate.module.css";

export default function FindCoordinate({message, coordinate}) {
  return(
    <>
      <div className={styles.message}>
        {message}
      </div>
      <div className={styles.coordinate}>
        {coordinate}
      </div>
    </>
  );
}