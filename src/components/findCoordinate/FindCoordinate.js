import findCoordinateStyles from "../findCoordinate/findCoordinate.module.css";

export default function FindCoordinate({message, coordinate}) {
  return(
    <>
      <div className={findCoordinateStyles.message}>
        {message}
      </div>
      <div className={findCoordinateStyles.coordinate}>
        {coordinate}
      </div>
    </>
  );
}