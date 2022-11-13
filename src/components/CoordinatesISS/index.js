import css from "./style.module.css";

const CoordinatesISS = (props) => {
  const { longitude, latitude } = props.ISSPositionObj;

  return (
    <div className={css["coordinates"]}>
      <div className={css["coordinates__header"]}>ISS is now located at:</div>
      <div className={css["coordinates__numbers"]}>longitude: {longitude}, latitude: {latitude}</div>
    </div>
  )
}

export default CoordinatesISS;