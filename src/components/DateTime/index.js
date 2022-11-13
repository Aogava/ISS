import css from "./style.module.css";

const DateTime = (props) => {
  return (<div className={css["dateTime"]}>
    <div className={css["dateTime__time"]}>Current UTC time: {props.time}</div>
    <div className={css["dateTime__date"]}>{props.date}</div>
  </div>)
}

export default DateTime;